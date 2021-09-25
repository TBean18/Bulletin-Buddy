const express = require("express");
const router = express.Router();
const jwt = require("../../util/jwt");

// Model and Schema Imports
const { model, UserSchema } = require("../../models/User");
const User = model;
const hub = require("../../models/Hub");
const posting = require("../../models/Posting");

// Route: POST api/register
// Description: Registers a new user with the res.body data
// Access: public

router.post("/register", (req, res) => {
  const body = req.body;
  if (
    body.name == "" ||
    body.password == "" ||
    body.phone_number == "" ||
    body.email == "" ||
    body.school == ""
  ) {
    res.json({ error: "Please fill out all user registration fields" });
    return;
  }

  // Create a new user
  const newUser = new User({
    name: body.name,
    email: body.email,
    phone_number: body.phone_number,
    password_hash: body.password,
    school: body.school,
  });

  // Save it to the database
  newUser
    .save()
    .then((item) => {
      let token = jwt.createToken({
        user_ID: item._id,
      });

      if (token.error !== "") throw token.error;

      res.json({
        user: item,
        token: token.accessToken,
        error: "",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ error: "Unable to register new user" });
    });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }).then((foundUser) => {
    foundUser.comparePassword(req.body.password, (err, isMatch) => {
      if (err)
        return res.status(404).json({
          error: "Login Failed.. Try Again",
        });
      if (!isMatch) {
        res.status(401).json({
          error: "Invalid password",
        });
      }
      if (isMatch) {
        res.json({
          user: foundUser,
          error: "",
        });
      }
    });
  });
});

router.post("/deleteUser", jwt.authenticateUser, (req, res) => {
  const uid = req.body.user_ID;
  User.findByIdAndDelete(uid, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(404).json();
    } else {
      console.log("Deleted: ", doc);
      res.json({
        doc,
        error: "",
      });
    }
  });
});

router.post("/registerInterest", jwt.authenticateUser, (req, res) => {
  const uid = req.body.user_ID;

  User.findById(uid).then((foundUser) => {
    foundUser.interests = req.body.interests;
    foundUser
      .save()
      .then((item) => {
        res.json({
          user: item,
          error: "",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({
          error: "Unable to register Interests at this time",
        });
      });
  });
});
module.exports = router;
