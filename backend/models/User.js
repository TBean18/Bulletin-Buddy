const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  display_name: {
    type: String,
    required: false,
  },
  interests: {
    type: [String],
    required: true,
    default: [],
  },
  phone_number: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  school: {
    type: String,
    required: true,
    // What about schools that dont exist.
  },
  password_hash: {
    type: String,
    required: true,
  },
});

// On save method, that hashes the password if it detects that password has been changed
UserSchema.pre("save", function (next) {
  let user = this;

  if (!user.isModified("password_hash")) {
    return next();
  }

  // Generate the Salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    //hash the password
    bcrypt.hash(user.password_hash, salt, function (err, hash) {
      if (err) return next(err);

      user.password_hash = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (inputPassword, cb) {
  bcrypt.compare(inputPassword, this.password_hash, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const model = mongoose.model("user", UserSchema);
module.exports = { model, UserSchema };
