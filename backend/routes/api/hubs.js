const express = require("express");
const router = express.Router();
const jwt = require("../../util/jwt");

// Model and Schema Imports
const user = require("../../models/User");
const User = user.model;
const hub = require("../../models/Hub");
const Hub = hub.model;
const posting = require("../../models/Posting");
const Posting = posting.model;

// Route: GET api/hubs/
// Description: Return the hub info including the board_list[] for a given user's School
// Access: private

router.get("/", jwt.authenticateUser, (req, res) => {
  // Get the user ID,
  const uid = req.body.user_ID;
  // Find the User in the DB,
  try {
    User.findById(uid).then((foundUser) => {
      let school = foundUser.school;
      Hub.find({ school: school }).then((foundHub) => {
        // TODO populate the post list
        res.json(foundHub.toJSON());
      });
    });
  } catch (error) {}
  // TODO  Get the User's School and Return the Hub for the given school
});

router.post("/create", jwt.authenticateUser, (req, res) => {
  const uid = req.body.user_ID;
  const newHub = new Hub({
    name: req.body.name,
    school: req.body.school,
  });

  newHub
    .save()
    .then((item) => {
      res.json({
        hub: item,
        error: "",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error: "Unable to create Hub",
      });
    });
});

// Route api/hubs/newPost
// Description: Creates a new post and adds it to the hubs post list
router.post("/newPost", jwt.authenticateUser, (req, res) => {
  const uid = req.body.user_ID;
  const body = req.body;

  const postData = {
    title: body.title,
    description: body.description,
    location: body.location,
    date: body.date,
    image_address: body.image_address,
    tags: body.tags,
    author: uid,
  };

  // Create new post
  const newPosting = new Posting(postData);

  // find the hub
  Hub.findOne({
    school: req.body.school,
  }).then((item) => {
    if (!item) return console.log("Item Does Not Exist!! ");
    // Add the new post to the group
    item.addPost(newPosting, (err) => {
      if (err) {
        console.log(err);
        return res.status(404).json({
          error: "Unable to post at this time",
        });
      } else {
        res.json({
          post: item,
          error: "",
        });
      }
    });
  });
});

module.exports = router;
