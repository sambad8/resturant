import mongoose from 'mongoose';

export const dBconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "RESTAURANT",
           
           
            
        });
        console.log("Connected To Database Successfully");
    } catch (err) {
        console.error(`Error in Connecting to Database: ${err}`);
        process.exit(1);
    }
};