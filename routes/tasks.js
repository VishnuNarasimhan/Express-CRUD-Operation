const express = require("express");
// const User = require("../models/users");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/tasks");

router.route("/").get(getAllUsers).post(createUser);

router.route("/form").get((req, res) => {
  res.render("form");
});

router.route("/users/:id").put(updateUser).delete(deleteUser);

module.exports = router;
