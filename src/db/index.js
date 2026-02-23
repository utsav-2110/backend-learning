import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDb connect !! DB Host:${connectionInstance.connection.host}`); //used to find to which database i'm connected.
        
    }
    catch(error){
        console.log("mongoDb connection failed", error);
        process.exit(1) //nodejs gives access of this. refrence of the process. 
    }
}

export default connectDB
