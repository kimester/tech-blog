const express = require("express");
const router = express.Router();
const { User, Blog } = require("../../models");
const withAuth = require("../../utils/auth");



//create Blog
router.post("/", withAuth, (req, res) => {

  Blog.create({
    ...req.body,
    user_id: req.session.user_id,
  })
    .then((newBlog) => {
      res.json(newBlog);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//update Blog
router.put("/:id", withAuth,  (req, res) => {
  Blog.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedBlog) => {
      res.json(updatedBlog);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//delete a Blog
router.delete("/:id", withAuth, (req, res) => {
  Blog.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delBlog) => {
      res.json(delBlog);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
