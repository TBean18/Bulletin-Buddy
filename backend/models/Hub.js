const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HubSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  board_list: {
    type: [Schema.Types.ObjectID],
    ref: "board",
    required: true,
    default: [],
  },
});

const model = mongoose.model("hub", HubSchema);
module.exports = { model, HubSchema };
