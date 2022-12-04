const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    roomNumber: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    halfBoard: {
      type: Boolean,
      default: false,
    },
    seaView: {
      type: Boolean,
      default: false,
    },
    imgUrl: String,
    maxGuests: {
      type: Number,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Room", schema);
