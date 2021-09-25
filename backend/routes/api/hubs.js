const express = require("express");
const router = express.Router();
const jwt = require("../../util/jwt");

// Model and Schema Imports
const user = require("../../models/User");
const hub = require("../../models/Hub");
const posting = require("../../models/Posting");

// Route: GET api/hubs/
// Description: Return the hub info including the board_list[] for a given user's School
// Access: private

router.get("/", jwt.authenticateUser, (req, res) => {
  // Get the user ID,
  const uid = req.body.user_ID;
  // Find the User in the DB,
  try {
    user.findById(uid).then((foundUser) => {
      let school = foundUser.school;
      hub.find({ school: school }).then((foundHub) => {
        // TODO populate the board list
        res.json(foundHub.toJSON());
      });
    });
  } catch (error) {}
  // TODO  Get the User's School and Return the Hub for the given school
});

module.exports = router;
