const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  hotel: {
    type: String,
    required: true,
  },

  room: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "Confirmed",
  },

  userEmail: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);