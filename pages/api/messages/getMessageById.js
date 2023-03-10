import messageSchema from '../../../server/models/messages.js'
import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import verifyToken from '@/server/verifyToken.js';


const apiRoute = nextConnect({

    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});
apiRoute.use(verifyToken);

apiRoute.post(async (req, res) => {

    const {_id} = req.body
    const Skill = mongoose.models.Messages || mongoose.model('Messages', messageSchema);

    try {

        await mongoose.connect(process.env.MONGODB_URI)


        const data = await Skill.findOne({_id});
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
