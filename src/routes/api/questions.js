const express = require("express");
const router = express.Router();

const {
  getTechnicalQuestion,
  getTheoryQuestion,
} = require("../../controllers/questions");

router.get("/theory", getTheoryQuestion);
router.get("/technical", getTechnicalQuestion);

module.exports = router;
