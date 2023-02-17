import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true
        
    },
    photo: {
       type: String,
       default:'default.svg'
    }
});


export default skillSchema