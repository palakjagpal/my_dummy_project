const express = require("express")
const bodyParser =  require("body-parser")
const path = require("path")

const productRoutes = require("./routes/products")
const userRoutes =  require("./routes/users")

const app = express()

const PORT = 3300

app.use(bodyParser.urlencoded({extended : false}))

app.use(express.static((path.join(__dirname, "public"))))

app.use("/product",productRoutes)
app.use("/user",userRoutes)

app.get("/",(req,res,next) => {
    res.sendFile(path.join(__dirname,"views","index.html"))
})

app.use("/",(req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})

app.listen(PORT || 5000,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
