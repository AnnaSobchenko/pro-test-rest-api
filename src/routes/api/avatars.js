const express = require("express");
const multer = require('multer');
const path = require('path');
const { uploadAvatar } = require("../../controllers/avatarsController");
const { catchErrors, catchDownloadError } = require("../../middlewares/catchErrors");

// post /api/avatars/upload
// content-type multipart/form-data
const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('../../../tmp'));
    }
});

router.post("/upload", uploadAvatar, catchErrors(catchDownloadError));

module.exports = router;