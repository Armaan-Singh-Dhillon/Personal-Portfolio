
import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import barSkillSchema from '@/server/models/bar-chart-skills';
const apiRoute = nextConnect({

    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});


apiRoute.get(async (req, res) => {


    const BarSkill = mongoose.models.BarSkill || mongoose.model('BarSkill', barSkillSchema);


    try {

        await mongoose.connect(process.env.MONGODB_URI)


        const data = await BarSkill.find({});
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
