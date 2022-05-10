const express = require("express");
const router = express.Router();
const { User, Blog } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  Blog.findAll().then((blogs) => {
    console.log(blogs);
    const hbsBlogs = blogs.map((blog) => {
      return blog.get({ plain: true });
    });
    console.log("==========");
    console.log(hbsBlogs);
    res.render("home", { blogs: hbsBlogs });
  });
});

router.get("/login", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  res.render('login');
   
});

router.get("/profile", withAuth,  (req, res) => {

  Blog.findAll({
    where: {
      user_id: req.session.user_id
    }
  }).then((blogData) => {

   const blogs = blogData.map((blog)=> blog.get({plain: true}));

   res.render('profile', {
     blogs, logged_in: req.session.logged_in
   })

  });
});

module.exports = router;
