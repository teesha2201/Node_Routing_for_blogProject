const Blogdata = require("../Controller/ControllerRouting")
const {auth} = require("../Middleware/authentication")


const BlogRouting = require('express').Router();

BlogRouting.get("/blog/",auth,Blogdata)

module.exports = BlogRouting;