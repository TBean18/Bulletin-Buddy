const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  interests: {
    type: [Schema.Types.ObjectID],
    ref: "organization",
    required: true,
    default: [],
  },
  phone_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
    // What about schools that dont exist.
  },
});

const model = mongoose.model("user", UserSchema);
module.exports = { model, UserSchema };
