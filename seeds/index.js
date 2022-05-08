const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {
        username:"Ester",
        password:"password"
    },
    {
        username:"Joe",
        password:"password1"
    },
    {
        username:"Caleb",
        password:"Password1"
    }
]

const blogs = [
    {
        title:"my first blog",
        body:"Welcome to my blog, im going to do this every day! Like, share, and subscribe",
        UserId:1
    },
    {
        title:"my final blog",
        body:"I cant do this anymore, blogging every day is too hard.  It was a fun half week yall",
        UserId:1
    },
    {
        title:"Dogs: a review",
        body:"I love dogs I love every kind of cat.  I want to hug all them but you cant. ",
        UserId:2
    }
]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()