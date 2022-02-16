const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
var jsonParser = bodyParser.json()
app.use(jsonParser);

var urlencodedParser = bodyParser.urlencoded({extended: false});

let port = process.env.PORT || 3000;
const importData = require("./data.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/users", (req, res) => {
    res.send(importData);
});

app.post("/login", urlencodedParser, (req, res) => {
    var userName = req.body.user;
    var pwd      = req.body.pwd;

    res.send("Post request to the homepage with User " + userName + " and pwd " + pwd + " to log in");
});

app.listen(port, () => {
    console.log(`Node server running on http://localhost:${port}`);
});
