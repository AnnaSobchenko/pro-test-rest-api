const express = require("express");
const authorize = require("../../middlewares/authorize");
const {
  signupUserControl,
  signinUserControl,
  logoutUserControl,
  currentUserControl,
  refreshTokenControl,
  googleSignIn
} = require("../../controllers/users");
const { schemas } = require("../../db/questionsModel");
const {
  catchLogErrors,
  catchSignupErrors,
  catchErrors,
} = require("../../middlewares/catchErrors");
const passport = require("passport");
require("../../middlewares/passportConfig")(passport);

const router = express.Router();

router.post(
  "/signup",
  schemas.postAuthValidation,
  catchSignupErrors(signupUserControl)
);
router.post("/login", schemas.postAuthValidation, catchLogErrors(signinUserControl));
router.post("/logout", authorize, catchErrors(logoutUserControl));
router.get("/current", authorize, catchErrors(currentUserControl));
router.post("/refresh", authorize, catchErrors(refreshTokenControl));
router.get("/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get("/google/callback", passport.authenticate('google', { session: false }),
  (req, res) => {
    console.log(req);
    res.redirect("auth/profile/");
  }
);
router.get("auth/profile/", catchErrors(googleSignIn));

module.exports = router;
