import mongoose from "mongoose";
import config from 'config';

async function dbConnect(){
    try {
        const mongodbUrl=config.get('mongodbUrl')
        await mongoose.connect(mongodbUrl)
        console.log('Mongo DB connected successfully')
    } catch (error) {
        console.error("connection failed!!")
    }
}


dbConnect();