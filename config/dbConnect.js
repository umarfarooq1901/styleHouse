// mongo db   instaall
// import mongoose
// mongoose is an ORM
// const url = "mongodb+srv://irfanusuf33:stylehouse4424@stylehouse.rcc8j.mongodb.net/?retryWrites=true&w=majority&appName=stylehouse"

const mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017/styleHouse"
const url = "mongodb+srv://umardev760:WfTY156HK53b2k8L@stylehouse.oicwm.mongodb.net/"

const connectDB = async () => {
  try {

  await  mongoose.connect(url)
  console.log("Database Connected !")

  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;