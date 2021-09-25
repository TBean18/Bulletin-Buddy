const express = require("express");
const router = express.Router();

// Route: GET api/hubs/
// Description: Return the hub info including the board_list[] for a given user's School
// Access: private

router.get("/hubs", (req, res) => {
  // TODO Get the user ID, Find the User in the DB, Get the User's School and Return the Hub for the given school
});
