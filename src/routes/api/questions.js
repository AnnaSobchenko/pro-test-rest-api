const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catchErrors");

const {
	getTechnicalQuestion,
	getTheoryQuestion,
	// checkTheoryQuestion,
  // checkTechnicalQuestion,
  checkQuestion,
} = require("../../controllers/questions");

router.get("/theory", catchErrors(getTheoryQuestion));
router.get("/technical", catchErrors(getTechnicalQuestion));
// router.post("/theory/check", catchErrors(checkTheoryQuestion));
// router.post("/technical/check", catchErrors(checkTechnicalQuestion));
router.post("/check/:type", catchErrors(checkQuestion));

module.exports = router;
