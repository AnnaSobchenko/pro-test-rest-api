const express = require("express");
const { getContacts, getContact, downloadFile, downloadAvatar } = require("../../controllers/contactsController")
const { catchErrors, catchDownloadError } = require("../../middlewares/catchErrors");
const { Contacts } = require("../../db/contactModel")

const router = express.Router();

router.get("/", catchErrors(getContacts));

router.get("/:name", catchErrors(getContact));

router.get("/resume/:name", catchDownloadError(downloadFile));

router.get("/avatar/:name", catchDownloadError(downloadAvatar));

module.exports = router;