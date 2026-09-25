const express = require("express");

const router = express.Router();

const {
  addRoom,
  getRooms,
  updateRoom,
  patchRoom,
  deleteRoom,
} = require(
  "../controllers/roomController"
);

// CREATE
router.post("/", addRoom);

// READ
router.get("/", getRooms);

// UPDATE (Full)
router.put("/:id", updateRoom);

// UPDATE (Partial)
router.patch("/:id", patchRoom);

// DELETE
router.delete("/:id", deleteRoom);

module.exports = router;