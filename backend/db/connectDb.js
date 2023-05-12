const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

//const MONGODB_URI =
   // process.env.MONGODB_URI;
    

    // connection with mongodb
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected!");
    } catch (error) {
        console.log("Error connecting to mongodb", error);
    }
};

module.exports = { connectDb };
