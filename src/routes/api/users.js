const express = require("express");
const authorize = require("../../middlewares/authorize");
const {
  signupUserControl,
  signinUserControl,
  logoutUserControl,
  currentUserControl,
  refreshTokenControl,
} = require("../../controllers/users");
const { schemas } = require("../../db/questionsModel");
const {
  catchLogErrors,
  catchSignupErrors,
  catchErrors,
} = require("../../middlewares/catchErrors");

const router = express.Router();

router.post(
  "/signup",
  schemas.postAuthValidation,
  catchSignupErrors(signupUserControl)
);
router.post(
  "/login",
  schemas.postAuthValidation,
  catchLogErrors(signinUserControl)
);
router.post("/logout", authorize, catchErrors(logoutUserControl));
router.get("/current", authorize, catchErrors(currentUserControl));
router.post("/refresh", authorize, catchErrors(refreshTokenControl));

router.get("/google", (req, res) => {
  console.log("req :>> ", req);
  res.render("login");
});

module.exports = router;
