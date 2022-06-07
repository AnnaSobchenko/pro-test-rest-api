const {
  signupUser,
  loginUser,
  logoutUser,
  currentUser,
//   verificationUser,
//   verificationSecondUser,
} = require("../models/users");


const signupUserControl = async (req, res, next) => {    
  const user = await signupUser(req.body);  
  res.status(201).json({
    contentType: "application/json",
    ResponseBody:  user,
  });
};

const signinUserControl = async (req, res, next) => {
  const { token, email, subscription } = await loginUser(req.body);
  res.status(201).json({
    contentType: "application/json",
    ResponseBody: {
      user: {
        email: email,
        subscription: subscription,
      },
      token: token,
    },
  });
};

const logoutUserControl = async (req, res, next) => {
  await logoutUser(req.user.token);
  res.sendStatus(204);
};

const currentUserControl = async (req, res, next) => {
  const user = await currentUser(req.user.token);
  res.status(200).send(user);
};

// const verificationEmailControl = async (req, res, next) => {
//   const user = await verificationUser(req.params.verificationToken);
//   res.status(200).json({ message: "Verification successful", user });
// };

// const resendingVerificationEmailControl = async (req, res, next) => {
//   const result = await verificationSecondUser(req.body);
//   if (result) {
//     res.status(200).json({ message: "Verification email send" });
//   } else {
//     res.status(400).json({ message: "Verification has already been passed" });
//   }
// };

module.exports = {
  signupUserControl,
  signinUserControl,
  logoutUserControl,
  currentUserControl,
//   verificationEmailControl,
//   resendingVerificationEmailControl,
};
