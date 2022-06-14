const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  job_title: {
    type: String,
    required: [true, "Job is required"],
  },
  comment: {
    type: String,
    // required: [true, "Description is required"],
  },
  avatar: {
    type: String,
  },
  links: {
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    email: {
      type: String,
    },
    resume: {
      type: String,
    },
  },
});

const Contacts = mongoose.model("contacts", contactsSchema);

module.exports = {
  Contacts,
};