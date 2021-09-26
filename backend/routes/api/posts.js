const express = require("express");
const router = express.Router();
const jwt = require("../../util/jwt");

// Model and Schema Imports
const { model, UserSchema } = require("../../models/User");
const User = model;
const hub = require("../../models/Hub");
const Hub = hub.model;
const posting = require("../../models/Posting");

// Route: POST api/posts/
// Description: Return the posts for the current users preferences
// Access: public
router.get("/", jwt.authenticateUser, (req, res) => {
  const uid = req.body.user_ID;

  User.findById(uid).then((u) => {
    const filters = u.interests;

    Hub.findOne({ school: u.school }).then((h) => {
      h.getPostsByTagFilter(filters, (err, result) => {
        if (err) {
          console.log(err);
          res.status(404).json({
            error: "Unable to get Posts",
          });
        }

        return res.json({
          postsByInterests: result,
          error: "",
        });
      });
    });
  });
});

router.post("/edit", jwt.authenticateUser, (req, res) => {
  const uid = req.body.user_ID;
  const pid = req.body.post_ID;
  const gid = req.body.group_ID;

  Hub.findById(gid).then((g) => {
    const post = g.post_list.id(pid);
    if (post.author !== uid) {
      res.status(404).json({
        error:
          "You are not authorized to edit this post. You can only edit posts you've created",
      });
    }
    p.editPost(req.body.newPost, (err, item) => {
      if (err) {
        console.log(err);
        res.status(404).json({
          error: "Post edit can not be completed",
        });
      }
      res.json({
        newPost,
        error: "",
      });
    });
  });
});
module.exports = router;
