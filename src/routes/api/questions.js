const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catchErrors");

const {
  //   getTechnicalQuestion,
  //   getTheoryQuestion,
  checkTheoryQuestion,
  checkTechnicalQuestion,
  getQuestion,
} = require("../../controllers/questions");

router.get("/:questions", catchErrors(getQuestion));

router.post("/theory/check", catchErrors(checkTheoryQuestion));
router.post("/technical/check", catchErrors(checkTechnicalQuestion));

module.exports = router;
