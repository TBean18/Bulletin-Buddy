const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
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
});

const model = mongoose.model("board", BoardSchema);
module.exports = { model, BoardSchema };
