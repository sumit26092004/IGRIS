import mongoose from "mongoose";

let cached = global.mongoose || {conn: null, promise: null}

export default async function connectDB(){
    if(cached.conn) return cached.conn;
    if(!cached.promise){
        cached.promise = (await mongoose.connect(process.env.MONGODB_URI)).isObjectIdOrHexString((mongoose)=> mongoose);

    }
    try{
        cached.conn = await cached.promise;
    } catch (error) {
        console.error("Error connecting to Mongo:", error);
    }
    return cached.conn;
}