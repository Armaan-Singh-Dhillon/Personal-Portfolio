import skillSchema from '../../../server/models/skillModel.js';
import mongoose from 'mongoose';

export default async function getItems(req ,res) {
     const {name} = req.body
    const Skill = mongoose.models.Skills || mongoose.model('Skills',skillSchema);

    try {

        await mongoose.connect(process.env.MONGODB_URI)
        
        
        await Skill.create({name});
        res.status(201).json({
            message:"skill added"
        })
       
    }
     catch (error) {
        console.log(error)
        res.status(500).json({
            message: "error"
        })
    }
}