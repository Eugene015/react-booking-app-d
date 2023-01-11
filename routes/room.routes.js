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

router.patch("/:roomId", async (req, res) => {
  try {
    const { roomId } = req.params;
    const updatedRoom = await Room.findByIdAndUpdate(roomId, req.body, {
      new: true,
    });
    res.send(updatedRoom);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
