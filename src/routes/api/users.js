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
const passport = require("passport");
require("../../middlewares/passportConfig")(passport);

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
router.get("/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get("/google/callback", passport.authenticate('google', { session: false }),
  (req, res) => {
    console.log(req);
    res.status(200).send();
    // res.redirect("auth/profile/");
  }
);

module.exports = router;
