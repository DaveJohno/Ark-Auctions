const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email).then((user) => {
    if (user) {
      console.log("userexsit");
      const isValidPassword = bcrypt.compareSync(
        password,
        user.password_digest
      );
      if (isValidPassword) {
        //log the user in
        console.log(user.id);
        req.session.userId = user.id;
        //send back user's name
        res.status(200).json({ userName: user.name });
      } else {
        // send back a error message for wrong emial or password
        res.status(422).json({ message: "invalid email or password" });
      }
    } else {
      res.status(422).json({ message: "invalid email or password" });
    }
  });
});

module.exports = router;
