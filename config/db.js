const mongoose = require("mongoose");

require("dotenv").config();
const Url = process.env.DB_URL;
function connectDB() {
  mongoose.connect(Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log(" Connected to DB Successfully ");


  }).catch((err) => {
    console.log("Could not connected to DB ", err);
  })
}

// const connectDB = async () => {
//   try {
//     await mongoose.connect(Url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     mongoose.set('strictQuery', false); // Set strictQuery to false to prepare for the upcoming change

//     console.log(`Connected to MongoDB Successfully`);
//   } catch (error) {
//     console.log(`MONGO Connect Error ${error}`);
//   }
// };

module.exports = connectDB;
