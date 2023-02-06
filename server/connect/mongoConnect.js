import mongoose from "mongoose";
import 'dotenv/config'
const connectToMongoDB = async () => {
    try {
        console.log(process.env.MONGO_URL)
        
        const connectionString = process.env.MONGO_URL;
        await mongoose.connect(connectionString);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
};

export default connectToMongoDB;
