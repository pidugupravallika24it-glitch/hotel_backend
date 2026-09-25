const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

console.log("Collection Name:", Room.collection.name);

module.exports = Room;