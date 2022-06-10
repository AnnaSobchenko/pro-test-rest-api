const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catchErrors");

const {
	getTechnicalQuestion,
	getTheoryQuestion,
	getTheoryQuestionAll,
	getTechnicalQuestionAll,
} = require("../../controllers/questions");

router.get("/theory", catchErrors(getTheoryQuestion));
router.get("/technical", catchErrors(getTechnicalQuestion));
router.get("/theory/all", catchErrors(getTheoryQuestionAll));
router.get("/technical/all", catchErrors(getTechnicalQuestionAll));

module.exports = router;
