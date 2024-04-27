const mongoose = require("mongoose");

// mongoose.connect('mongodb+srv://akshaybaraiya5656:akshay8698@ecommerceapi.wszsr3u.mongodb.net/EcommerceApi?retryWrites=true&w=majority&appName=EcommerceApi', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const connectDB = (uri) => {
  console.log("connected to successfully")
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });
