require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            process.env.ATLAS_URI
        );

        console.log("Successfully conneted to database");
    }
    catch (error) {
        console.error("MongoDB Error:", error);
        // process.exit(1);
    }
};

module.exports = connectDB;