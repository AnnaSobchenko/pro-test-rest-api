const {
  signupUser,
  loginUser,
  logoutUser,
  currentUser,
  refreshMToken,
} = require("../services/users");

const signupUserControl = async (req, res, next) => {
  const user = await signupUser(req.body);
  res.status(201).json({
    contentType: "application/json",
    ResponseBody: user,
  });
};

const signinUserControl = async (req, res, next) => {
  const user = await loginUser(req.body);
  res.status(201).json({
    contentType: "application/json",
    ResponseBody: user,
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

const refreshTokenControl = async (req, res, next) => {
  const user = await refreshMToken(req.user.token);
  res.status(200).send(user);
};

module.exports = {
  signupUserControl,
  signinUserControl,
  logoutUserControl,
  currentUserControl,
  refreshTokenControl,
};
