const express = require("express");
const authorize = require("../../middlewares/authorize");
const {
  signupUserControl,
  signinUserControl,
  logoutUserControl,
  currentUserControl,
  refreshTokenControl,
} = require("../../controllers/users");
const { postAuthValidation } = require("../../middlewares/validationSchema");
const {
  catchLogErrors,
  catchSignupErrors,
  catchErrors,
} = require("../../middlewares/catchErrors");

const router = express.Router();

router.post(
  "/signup",
  postAuthValidation,
  catchSignupErrors(signupUserControl)
);
router.post("/login", postAuthValidation, catchLogErrors(signinUserControl));
router.post("/logout", authorize, catchErrors(logoutUserControl));
router.get("/current", authorize, catchErrors(currentUserControl));
router.post("/refresh", authorize, catchErrors(refreshTokenControl));

module.exports = router;
