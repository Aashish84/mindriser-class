const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./models/User");

const app = express();

app.use(express.json());

app.get("/register", async (req, res) => {
  try {
    let hased_pw = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ ...req.body, password: hased_pw });
    res.status(200).send({ user });
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).send("no email or password found");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send("no user of email found");
    }

    const status = await bcrypt.compare(password, user.password);

    if (!status) {
      return res.status(401).send("password not matched");
    }

    const token = jwt.sign({ user }, "shhhh");
    res.status(200).send(token);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

const jwtMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(400).send("no authorization header");
  }

  const token = authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, "shhhh");
    const user = await User.findById(decoded?.user?._id);

    if (!user) {
      return res.status(401).send("no user found");
    }

    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

app.get("/protected", jwtMiddleware, async (req, res) => {
  res.status(200).send("hello");
});

app.listen(8000, () => {
  mongoose
    .connect("mongodb://localhost:27017/mindriser")
    .then((res) => {
      console.log("server is listening at port 8000...");
    })
    .catch((err) => {
      console.log({ err });
    });
});
