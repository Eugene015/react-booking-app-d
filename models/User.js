const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,

      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String },
    image: String,
    phone: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
