const express =  require("express")
const path = require("path")
const bodyParser = require("body-parser")
const rootDir = require("../util/path")

const router = express.Router()

router.get("/",(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","products.html"))
})

router.get("/addProducts",(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","addProducts.html"))
})

router.post("/addProducts",(req,res,next) => {
    console.log("Product Name : ",req.body.product)
    res.redirect("/product")
})

module.exports=router