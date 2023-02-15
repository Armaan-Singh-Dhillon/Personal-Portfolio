import messageSchema from '../../../server/models/messages.js'
import mongoose from 'mongoose';
import nextConnect from 'next-connect';



const apiRoute = nextConnect({

    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});


apiRoute.post(async (req, res) => {
     
    const {name , email, content} =req.body

    const Message = mongoose.models.Messages || mongoose.model('Messages', messageSchema);

    try {

        await mongoose.connect(process.env.MONGODB_URI)


        const data = await Message.create({name ,email ,content});
        res.status(201).json({ data })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            message: "error"
        })
    }
});

export default apiRoute