const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const posting = require("./Posting");

const HubSchema = new Schema({
  // TODO remove name property
  name: {
    type: String,
    required: false,
  },
  post_list: {
    type: [posting.PostingSchema],
    required: true,
    default: [],
  },
  school: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
});

// cb expects (err, res)
HubSchema.methods.addPost = function (post, cb) {
  this.post_list.push(post);
  this.save()
    .then(() => {
      cb(null, true);
    })
    .catch((err) => cb(err));
};

HubSchema.methods.getPostsByTagFilter = function (filters, cb) {
  // let result = {
  //   res: [
  //     {
  //       tag:
  //       posts: []
  //     }
  //   ],
  // };

  let res = [];
  filters.forEach((val) => {
    let curResElement = this.post_list.filter((post) =>
      post.tags.includes(val)
    );
    res.push({
      tag: val,
      posts: curResElement,
    });
  });

  // Sort Array by size
  res.sort((a, b) => {
    return b.posts.length - a.posts.length;
  });

  return cb(null, res);
};

const model = mongoose.model("hub", HubSchema);
module.exports = { model, HubSchema };
