import mongoose from "mongoose";


const barSkillSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    points:{
        type: String,
        
    }
});


export default barSkillSchema