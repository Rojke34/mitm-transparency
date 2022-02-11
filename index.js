const express = require("express");
const cors = require('cors');
const app = express();
let port = process.env.PORT || 3000;
const importData = require("./data.json");

app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/users", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Node server running on http://localhost:${port}`);
});