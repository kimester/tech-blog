const express = require("express");
const router = express.Router();
const { User, Blog } = require("../../models");

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ msg: "logged out!" });
});

//create user
// /api/users/signup
router.post("/signup", (req, res) => {
  User.create(req.body)
    .then((newUser) => {
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;

        res.status(200).json(newUser);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
// /api/users/login
router.post("/login", async (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then(async (userData) => {
      
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
