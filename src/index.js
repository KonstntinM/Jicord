const express = require("express")
var app = express()

const authenticate = require("./services/authentication-service")
const jiraService = require("./services/jira-service")

// app configuration

app.use(express.json())

// authentication

const generateKey = require("./services/key-service")

process.env.key = "1"

if (!process.env.KEY) {
    generateKey(150)
        .then((key) => {
            process.env['KEY'] = key
            console.log("http://localhost:80/webhook/" + key);
        })
}


// routes

app.get("/", function(req, res) {
    res.json("Hello World from Express!");
});

app.post("/webhook/:key/:id", authenticate, function (req, res) {
    console.log("new Request!");
    switch (req.params.id) {
        case "1000":
            jiraService.newProduction(req.body)
            break;
        default:
            res.status(400).send()
    }
})

// server

const port = process.env.PORT || 80
app.listen(port, () => {
    console.log("\x1b[32m" + "The backend server started successfully and listens to port " + "\x1b[33m" + port + "\x1b[32m" + "." + "\x1b[0m")
});