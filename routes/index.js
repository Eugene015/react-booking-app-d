const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));
router.use("/room", require("./room.routes"));
router.use("/reservation", require("./reservation.routes"));

module.exports = router;
