const Booking = require("../models/Booking");

// Add Booking
const addBooking = async (req, res) => {
  try {
    const booking = await Booking.create(
      req.body
    );

    res.status(201).json({
      message: "Booking Created",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Bookings
const getBookings = async (req, res) => {
  try {
    const bookings =
      await Booking.find();

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Booking (PUT)
const updateBooking = async (
  req,
  res
) => {
  try {
    const booking =
      await Booking.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    if (!booking) {
      return res.status(404).json({
        message: "Booking Not Found",
      });
    }

    res.json({
      message: "Booking Updated",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Patch Booking (PATCH)
const patchBooking = async (
  req,
  res
) => {
  try {
    const booking =
      await Booking.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    if (!booking) {
      return res.status(404).json({
        message: "Booking Not Found",
      });
    }

    res.json({
      message: "Booking Patched",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Booking
const deleteBooking = async (
  req,
  res
) => {
  try {
    const booking =
      await Booking.findByIdAndDelete(
        req.params.id
      );

    if (!booking) {
      return res.status(404).json({
        message: "Booking Not Found",
      });
    }

    res.json({
      message: "Booking Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addBooking,
  getBookings,
  updateBooking,
  patchBooking,
  deleteBooking,
};