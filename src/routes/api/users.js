const express = require("express");
const authorize = require("../../middlewares/authorize");
const {
  singupUserControl,
  loginUserControl,
  logoutUserControl,
  currentUserControl,
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
  catchSignupErrors(singupUserControl)
);
router.post("/login", postAuthValidation, catchLogErrors(loginUserControl));
router.get("/logout", authorize, catchErrors(logoutUserControl));
router.get("/current", authorize, catchErrors(currentUserControl));
// router.get("/verify/:verificationToken", catchErrors(verificationUserEmail));
// router.post("/users/verify/", catchErrors(resendingVerificationUserEmail));

module.exports = { usersRouter: router };
