const express = require("express");
const app = express();
let port = process.env.port || 3000;
const importData = require("./data.json");

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/users", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Node server running on http://localhost:${port}`);
});