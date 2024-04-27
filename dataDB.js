require("dotenv").config();
const connectDB = require("./db/connection");
const locationModel = require("./models/locationModel");

const DataJson = require("./data.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await locationModel.deleteMany();
        await locationModel.create(DataJson);
        console.log("success");
    } catch (error) {
        console.log(error)
    }
}

start();