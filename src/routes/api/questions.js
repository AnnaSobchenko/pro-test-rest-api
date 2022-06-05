const express = require("express");
const router = express.Router();

const {
  getTechnicalQuestion,
  getTheoryQuestion,
} = require("../../controllers/questions");

router.get("test/theory", getTheoryQuestion);
router.get("test/technical", getTechnicalQuestion);

module.exports = { questionsRouter: router };
