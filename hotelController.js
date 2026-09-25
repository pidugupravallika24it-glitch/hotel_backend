const Hotel = require("../models/Hotel");

const addHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);

    res.status(201).json({
      message: "Hotel Added",
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.json(hotels);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Hotel (PUT)
const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Hotel Updated",
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Patch Hotel (PATCH)
const patchHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Hotel Patched",
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Hotel (DELETE)
const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Hotel Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addHotel,
  getHotels,
  updateHotel,
  patchHotel,
  deleteHotel,
};