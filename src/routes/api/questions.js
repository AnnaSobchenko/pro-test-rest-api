const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catchErrors");

const {
  //   getTechnicalQuestion,
  //   getTheoryQuestion,
  checkTheoryQuestion,
  checkTechnicalQuestion,
  getQuestion,
  checkQuestion,
} = require("../../controllers/questions");

router.get("/:type", catchErrors(getQuestion));
// router.post("/theory/check", catchErrors(checkTheoryQuestion));
// router.post("/technical/check", catchErrors(checkTechnicalQuestion));
router.post("/check/:type", catchErrors(checkQuestion));

module.exports = router;
