const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("posting", PostingSchema);
module.exports = { model, PostingSchema };
