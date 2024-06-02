const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const conn = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successful")


        
    } catch (error) {
        console.log("connection failed")
        process.exit(0)
        
    }
}

module.exports = conn;
