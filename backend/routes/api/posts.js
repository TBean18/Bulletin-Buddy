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

    Hub.find({ school: u.school }).then((h) => {
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

module.exports = router;
