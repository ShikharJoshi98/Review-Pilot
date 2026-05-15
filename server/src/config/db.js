const { default: mongoose } = require("mongoose")
const config = require("./config")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.MONGO_URI);
        if (conn.connection.host) {
            console.log("Connected to DB successfully");
        }
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;