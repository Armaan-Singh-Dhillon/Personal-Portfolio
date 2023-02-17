import frameWorkSchema from '@/server/models/Frameworks.js';
import mongoose from 'mongoose';
import nextConnect from 'next-connect';

const apiRoute = nextConnect({

    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});


apiRoute.get(async (req, res) => {


    const Frameworks = mongoose.models.Frameworks || mongoose.model('Frameworks', frameWorkSchema);

    try {

        await mongoose.connect(process.env.MONGODB_URI)


        const data = await Frameworks.find({});
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
