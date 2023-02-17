import skillSchema from '../../../server/models/skillModel.js';
import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import verifyToken from '../../../server/verifyToken.js';


const apiRoute = nextConnect({

    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});
apiRoute.use(verifyToken);

apiRoute.delete(async (req, res) => {

    
    const Skill = mongoose.models.Skills || mongoose.model('Skills', skillSchema);

    try {

        await mongoose.connect(process.env.MONGODB_URI)


        const data = await Skill.deleteOne({name:req.body.name});
        res.status(201).json({
            message:"Deleted Successfully"
        })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            message: "error"
        })
    }
});

export default apiRoute
