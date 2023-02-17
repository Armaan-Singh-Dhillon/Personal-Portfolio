import mongoose from "mongoose";

const frameWorkSchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true

    },
    photo: {
        type: String,
        default: 'default.svg'
    }
});


export default frameWorkSchema