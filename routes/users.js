const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const rootDir = require("../util/path")

const router = express.Router()


router.get("/",(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","users.html"))
})

router.get("/addUsers",(req,res,next) => {
    res.sendFile(path.join)
})

router.post("/addUsers",(req,res,next) => {
    console.log(req.body.username)
    res.redirect("/user")
})

exports.module = router