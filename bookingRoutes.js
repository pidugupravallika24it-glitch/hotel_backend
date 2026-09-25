const express = require("express");

const router = express.Router();

const {
  addBooking,
  getBookings,
  updateBooking,
  patchBooking,
  deleteBooking,
} = require(
  "../controllers/bookingController"
);

// CREATE
router.post("/", addBooking);

// READ
router.get("/", getBookings);

// UPDATE (Full)
router.put("/:id", updateBooking);

// UPDATE (Partial)
router.patch("/:id", patchBooking);

// DELETE
router.delete("/:id", deleteBooking);

module.exports = router;