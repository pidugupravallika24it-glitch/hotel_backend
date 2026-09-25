const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  rating: String,
  price: String,
  description: String,
  image: String,
});

module.exports = mongoose.model(
  "Hotel",
  hotelSchema
);