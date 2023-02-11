import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    image: {
        type: String,
       default:'default.svg'
    }
});


export default skillSchema