const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  notified_members: {
    type: [Schema.Types.ObjectID],
    ref: "user",
    required: true,
    default: [],
  },
});

const model = mongoose.model("organization", OrganizationSchema);
module.exports = { model, OrganizationSchema };
