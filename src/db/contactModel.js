const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  job: {
    type: String,
    required: [true, "Job is required"],
  },
  description: {
    type: String,
    // required: [true, "Description is required"],
  },
});

const Contacts = mongoose.model("contacts", contactsSchema);

module.exports = {
  Contacts,
};