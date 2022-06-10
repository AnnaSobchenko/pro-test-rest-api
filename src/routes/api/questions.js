const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catchErrors");

const {
	getTechnicalQuestion,
	getTheoryQuestion,
	checkTheoryQuestion,
	checkTechnicalQuestion,
} = require("../../controllers/questions");

router.get("/theory", catchErrors(getTheoryQuestion));
router.get("/technical", catchErrors(getTechnicalQuestion));
router.get("/theory/check", catchErrors(checkTheoryQuestion));
router.get("/technical/check", catchErrors(checkTechnicalQuestion));

module.exports = router;
