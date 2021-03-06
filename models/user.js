const mongoose = require("mongoose");
const { Schema } = mongoose;

//=========================================================================================

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: { type: Number, required: true },
  city: {
    type: String,
    required: true
  },
  createdEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ],
  bookings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Booking"
    }
  ],
  pic: String
});

userSchema.virtual("obj").get(function() {
  return { ...this._doc, _id: this.id };
});

module.exports = mongoose.model("User", userSchema);
