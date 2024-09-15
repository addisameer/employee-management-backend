import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDb = async () => {
    try {
        const connectionResponse = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Database connected successfully : ${connectionResponse.connection.port}`);
        return connectionResponse
    } catch (err) {
        console.error("Mongo db connection failed",err)
        process.exit(1)
        
    }
}

export {connectDb}