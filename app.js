// REQUIRE PACKAGES
const express = require("express")
const path = require("path")

const app = express()

// MIDDLEWARE

// Rendering Static Files
app.use(express.static('public'))

// Using body-parser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// ROUTES
app.get("/", function(req, res) {
    res.send("Hellow World")
})
app.get("/about", function(req, res) {
    res.send("<h1> About Me </h1>")
})

app.get("/calculator", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})
app.post("/", function(req, res) {
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let sum = (num1) + (num2)
    res.send(` <h2> The sum of ${num1} and ${num2} is  ${sum} </h2>`)
})

// STARTING SERVER
const PORT = 3000 || process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})