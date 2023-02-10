import { MongoClient } from "mongodb"
import passwordChecker from '../../server/passwordVerifier.js'
import validateEmail from '../../server/validateEmail.js'
import jwt from 'jsonwebtoken';
import nc from "next-connect";
const secret = process.env.JWT_SECRET;
const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
}).post(async(req, res) => {
       const { plainEmail, plainPassword }=req.body
        
         
        try{
            if (!validateEmail(plainEmail)){
                throw new Error('Please provide a valid email')
            }
            const client = await MongoClient.connect(process.env.MONGODB_URI)
            const db = client.db()
            const data = await db.collection('admins').findOne({})
            
             const {_id ,password,email} =data
             console.log(email,plainEmail)

            if ( plainEmail==email && await passwordChecker(plainPassword, password)) {
                console.log("Password is correct");
                const token = jwt.sign({ _id ,email  }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
                
               res.status(201).json(
                {
                    token
                    
                }
               )
            } else {
                throw new Error('Incorrect Password or Email')
            }
           
            client.close()
            
        }
        catch(error){
            console.log(error)
            res.status(500).json(
                {
                    message:'Internal Server Error'
                }
            )
        }
        
    
    })
   

export default handler;
