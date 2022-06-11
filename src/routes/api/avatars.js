const express = require("express");
const { getContacts, getContact, downloadFile } = require("../../controllers/contactsController")
const { catchErrors, catchDownloadError } = require("../../middlewares/catchErrors");
const { Contacts } = require("../../db/contactModel")

// post /api/avatars/upload
const router = express.Router();

router.post("/upload", catchErrors(getContacts));

module.exports = router;