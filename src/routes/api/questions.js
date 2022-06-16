const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catchErrors");

const { getQuestion, checkQuestion } = require("../../controllers/questions");

router.get("/:type", catchErrors(getQuestion));
router.post("/check/:type", catchErrors(checkQuestion));

module.exports = router;
