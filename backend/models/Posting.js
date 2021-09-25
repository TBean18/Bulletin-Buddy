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
  image_address: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  tags: {
    type: [String],
    required: true,
    default: [],
  },
});

const model = mongoose.model("posting", PostingSchema);
module.exports = { model, PostingSchema };
