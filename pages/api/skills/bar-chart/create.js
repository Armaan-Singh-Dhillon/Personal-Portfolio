
import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import verifyToken from '@/server/verifyToken';
import barSkillSchema from '@/server/models/bar-chart-skills';



const apiRoute = nextConnect({

    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(verifyToken);




apiRoute.post(async (req, res) => {
          
    const {name,points} = req.body
    

    const BarSkill = mongoose.models.BarSkill || mongoose.model('BarSkill', barSkillSchema);

    try {

        await mongoose.connect(process.env.MONGODB_URI)


        await BarSkill.create({name,points});
        res.status(201).json({
            message: "skill added",
            name,
            

        })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            message: "error"
        })
    }
});

export default apiRoute;
