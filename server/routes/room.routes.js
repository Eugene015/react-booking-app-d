const express = require("express");
const Room = require("../models/Room");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Room.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
