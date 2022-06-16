const express = require("express");
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { uploadAvatar } = require("../../controllers/avatarsController");
const { catchErrors, catchDownloadError } = require("../../middlewares/catchErrors");

// post /api/avatars/upload
// content-type multipart/form-data
const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('./tmp'));
    },
    filename: (req, file, cb) => {
        const [filename, extension] = file.originalname.split('.');
        cb(null, `${uuidv4()}.${extension}`)
    }
});

const uploadmiddleware = multer({ storage })

// const upload = multer({ dest: 'uploads/' })
// загрузити: 
router.post("/upload/:name", uploadmiddleware.single('avatar'), uploadAvatar, catchErrors(catchDownloadError));

// скачати: router.use("/download", express.static(path.resolve('./tmp'));

module.exports = router;