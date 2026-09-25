const Room = require("../models/Room");

// Add Room
const addRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.status(201).json({
      message: "Room Added",
      room,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Rooms
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.json(rooms);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Room (PUT)
const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!room) {
      return res.status(404).json({
        message: "Room Not Found",
      });
    }

    res.json({
      message: "Room Updated",
      room,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Patch Room (PATCH)
const patchRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!room) {
      return res.status(404).json({
        message: "Room Not Found",
      });
    }

    res.json({
      message: "Room Patched",
      room,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Room
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(
      req.params.id
    );

    if (!room) {
      return res.status(404).json({
        message: "Room Not Found",
      });
    }

    res.json({
      message: "Room Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addRoom,
  getRooms,
  updateRoom,
  patchRoom,
  deleteRoom,
};