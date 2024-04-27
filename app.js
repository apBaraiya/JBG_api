require("dotenv").config();

const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const connectDB =require("./db/connection");
const PORT = process.env.PORT || 5000;

const data_routes = require("./routes/route");

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// Middleware
// app.use(express.json());
app.use("/api/data", data_routes);

// GET all locations
// app.get('/locations', async (req, res) => {
//     try {
//       const locations = await Location.find();
//       res.json(locations);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
  
//   // POST a new location
//   app.post('/locations', async (req, res) => {
//     const location = new Location(req.body);
//     try {
//       const newLocation = await location.save();
//       res.status(201).json(newLocation);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });
// Start the server
const Start = async () => {
    try {
      await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
}
Start();
