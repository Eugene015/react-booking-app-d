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

    totalPrice: {
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
    dates: [],
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Reservation", schema);
