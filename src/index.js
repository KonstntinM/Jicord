const express = require("express")
var app = express()

const authenticate = require("./services/authentication-service")

// authentication

const generateKey = require("./services/key-service")

if (!process.env.KEY) {
    generateKey(150)
        .then((key) => {
            process.env['KEY'] = key
        })
}


// routes

app.get("/", function(req, res) {
    res.json("Hello World from Express!");
});

app.post("/webhook/:code", authenticate, function (req, res) {

})

// server

const port = process.env.PORT || 80
app.listen(port, () => {
    console.log("\x1b[32m" + "The backend server started successfully and listens to port " + "\x1b[33m" + port + "\x1b[32m" + "." + "\x1b[0m")
});