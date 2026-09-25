const express = require("express");
const router = express.Router();

const {
  addHotel,
  getHotels,
  updateHotel,
  patchHotel,
  deleteHotel,
} = require(
  "../controllers/hotelController"
);

router.post("/", addHotel);
router.get("/", getHotels);

router.put("/:id", updateHotel);

router.patch("/:id", patchHotel);

router.delete("/:id", deleteHotel);

module.exports = router;