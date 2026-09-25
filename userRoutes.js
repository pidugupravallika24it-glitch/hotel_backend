const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
  updateUser,
  patchUser,
  deleteUser,
} = require("../controllers/userController");

// REGISTER
router.post("/register", registerUser);

// LOGIN
router.post("/login", loginUser);

// READ
router.get("/", getUsers);

// UPDATE (Full)
router.put("/:id", updateUser);

// UPDATE (Partial)
router.patch("/:id", patchUser);

// DELETE
router.delete("/:id", deleteUser);

module.exports = router;