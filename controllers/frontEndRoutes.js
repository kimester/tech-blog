const express = require('express');
const router = express.Router();
const {User,Blog} = require('../models');

router.get("/",(req,res)=>{
    Blog.findAll().then(blogs=>{
        console.log(blogs)
        const hbsBlogs = blogs.map(blog=>{
            return blog.get({plain:true})
        })
        console.log("==========")
        console.log(hbsBlogs)
        res.render("home",{blogs:hbsBlogs})
    })
    
})
router.get("/login",(req,res)=>{
    res.render("login")
})

module.exports = router;