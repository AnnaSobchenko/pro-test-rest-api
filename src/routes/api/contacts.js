const express = require("express");
const { getContacts, getContact, downloadFile } = require("../../controllers/contactsController")
const { catchErrors, catchDownloadError } = require("../../middlewares/catchErrors");
const { Contacts } = require("../../db/contactModel")

const router = express.Router();

router.get("/", catchErrors(getContacts));

router.get("/:name", catchErrors(getContact));

router.get("/resume/:name", catchDownloadError(downloadFile));

module.exports = router;