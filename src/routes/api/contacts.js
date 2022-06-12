const express = require("express");
const { getContacts, getContact, addContact, downloadFile, downloadAvatar } = require("../../controllers/contactsController")
const { catchErrors, catchDownloadError } = require("../../middlewares/catchErrors");
const authorize = require("../../middlewares/authorize");
const { Contacts } = require("../../db/contactModel")

const router = express.Router();

router.get("/", catchErrors(getContacts));

router.get("/:name", catchErrors(getContact));

router.post("/", catchErrors(addContact))

router.get("/resume/:name", catchDownloadError(downloadFile));

router.get("/avatar/:name", catchDownloadError(downloadAvatar));

module.exports = router;