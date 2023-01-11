const express = require("express");
const auth = require("../middleware/auth.middleware");
const Reservation = require("../models/Reservation");
const router = express.Router({ mergeParams: true });

// /api/reservation

router.get("/", auth, async (req, res) => {
  try {
    const allResList = await Reservation.find();
    res.send(allResList);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.get("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    const resList = await Reservation.find({ userId: userId });

    res.send(resList);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.post("/", auth, async (req, res) => {
  try {
    const newReservation = await Reservation.create({
      ...req.body,
      userId: req.user._id,
    });
    res.status(201).send(newReservation);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.delete("/:reservId", auth, async (req, res) => {
  try {
    const { reservId } = req.params;
    const removedReservation = await Reservation.findById(reservId);

    if (
      removedReservation.userId.toString() === req.user._id ||
      req.user._id === "63b943c68e20ba0fcc599d79"
    ) {
      await removedReservation.remove();
      return res.send(null);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
