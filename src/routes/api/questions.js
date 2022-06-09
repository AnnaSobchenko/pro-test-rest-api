const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catchErrors");

const {
  getTechnicalQuestion,
  getTheoryQuestion,
} = require("../../controllers/questions");

router.get("/theory", catchErrors(getTheoryQuestion));
router.get("/technical", catchErrors(getTechnicalQuestion));

module.exports = router;
