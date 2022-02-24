const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('testing2022.test.key'),
    cert: fs.readFileSync('testing2022.test.crt')
};

const app = express();
var jsonParser = bodyParser.json()
app.use(jsonParser);

var urlencodedParser = bodyParser.urlencoded({extended: false});

let port = process.env.PORT || 3000;
const importData = require("./data.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world! ey papu que todo bien, como vas con el ejercicio?");
});

app.get("/users", (req, res) => {
    res.send(importData);
});

app.post("/login", urlencodedParser, (req, res) => {
    var userName = req.body.user;
    var pwd      = req.body.pwd;
    console.log('here', userName, pwd);

    res.send(JSON.stringify({ data: "Post request to the homepage with User " + userName + " and pwd " + pwd + " to log in" }));
});

// var server = https.listen(port, 'localhost', function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })

https.createServer(options, app).listen(port, () => {
    console.log(`Node server running on https://localhost:${port}`);
});


//openssl genrsa -des3 -out myCA.key 2048
//openssl req -x509 -new -nodes -key myCA.key -sha256 -days 1825 -out myCA.pem

//openssl genrsa -out testing2022.test.key 2048

//openssl req -new -key testing2022.test.key -out testing2022.test.csr



//openssl x509 -req -in testing2022.test.csr -CA myCA.pem -CAkey myCA.key -CAcreateserial -out testing2022.test.crt -days 825 -sha256 -extfile mitm.kevin.ext

