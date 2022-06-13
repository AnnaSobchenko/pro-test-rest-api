const { Users } = require("../db/usersModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs").promises;
const uuid = require("uuid");

require("dotenv").config();

const signupUser = async (body) => {
  const { email, password } = body;
  await Users.create({
    email,
    password: await bcryptjs.hash(
      password,
      Number(process.env.BCRYPT_SALT_ROUNDS)
    ),
    verificationToken: uuid.v4(),
  });
  let user = await Users.findOne({ email });
  const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  user = await Users.findOneAndUpdate({ email }, { token }, { new: true });
  return user;
};

const loginUser = async (body) => {
  const { email, password } = body;
  let user = await Users.findOne({ email });
  const isPasswordCorrect = await bcryptjs.compare(password, user.password);
  if (isPasswordCorrect) {
    const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const refreshToken = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN_REFRESH,
    });
    user = await Users.findOneAndUpdate(
      { email },
      { token, refreshToken },
      { new: true }
    );
    console.log("user :>> ", user);
    return user;
  }
};

const logoutUser = async (token) => {
  const user = await Users.findOneAndUpdate(
    { token },
    { token: null },
    { new: true }
  );
  return user;
};

const currentUser = async (token) => {
  const user = await Users.findOne({ token }, { email: 1, _id: 0 });
  return user;
};

const refreshMToken = async (token) => {
  userOld = await Users.findOne({ token }, { email: 1, _id: 1 });

  const accessToken = jwt.sign({ sub: userOld._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  const refreshToken = jwt.sign({ sub: userOld._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN_REFRESH,
  });
  const user = await Users.findOneAndUpdate(
    { token },
    { token: accessToken, refreshToken: refreshToken },
    { new: true }
  );

  return user;
};

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  currentUser,
  refreshMToken,
};
