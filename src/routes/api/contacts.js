const express = require("express");
const {getContacts, getContact} = require("../../controllers/contactsController")
const { catchErrors } = require("../../middlewares/catchErrors");

const router = express.router();

router.get("/", catchErrors(getContacts));

router.get("/contact"), catchErrors(getContact);

module.exports = router;