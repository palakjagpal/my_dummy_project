const express = require("express")
const path = require("path")
const rootDir = require("../util/path")

const bodyParser = require("body-parser");

const router = express.Router()


router.get("/",(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","users.html"))
})

router.get("/user",(req,res,next) => {
    res.sendFile(path.join(__dirname,"views","users.html"))
})

router.get("/addUsers",(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","addUsers.html"))
})

router.post("/user/addUsers",(req,res,next) => {
    console.log("Username : ",req.body.username)
    res.redirect("/user")
})

module.exports=router