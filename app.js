
const cors = require("cors");
const express = require("express");
const router = require("./router/user.router");
const pdfrouter=require("./router/pdf.router")
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//user api router
app.use("/api", router)



//pdf extract router
app.use("/pdfextract",pdfrouter)





//initial router
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/index.html")
})

//route not found
app.use((req, res, next) => {
    res.status(404).json({
        message: "no route found"
    })
})

//server site error
app.use((err, req, res, next) => {
    res.send.json({
        message: "server problem"
    })
})




module.exports = app

