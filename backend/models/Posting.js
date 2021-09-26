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
    validate: [imageLinkValidation, "Image Link Not Detected"],
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

function imageLinkValidation(url) {
  return /(jpeg|jpg|gif|png|image)/.test(url);
}

PostingSchema.methods.editPost = function (newPost, cb) {
  if (newPost.tags) {
    this.tags = newPost.tags;
  }
  if (newPost.image_address) {
    this.image_address = newPost.image_address;
  }
  if (newPost.location) {
    this.location = newPost.location;
  }
  if (newPost.date) {
    this.date = newPost.date;
  }
  if (newPost.description) {
    this.description = newPost.description;
  }
  if (newPost.title) {
    this.title = newPost.title;
  }

  this.save()
    .then((item) => cb(null, item))
    .catch((err) => cb(err));
};

const model = mongoose.model("posting", PostingSchema);
module.exports = { model, PostingSchema };
