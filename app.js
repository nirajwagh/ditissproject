var express= require("express");

const { config } = require("winston");

const winston = require("winston");

const bodyParser = require("body-parser");

var app=express();

const logger = require('./winston/config')


const https = require("https")

const fs = require("fs")

const path = require("path")

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', (req, res, next) => {

    res.render("login")

})

const server = https.createServer({

    key: fs.readFileSync(path.join(__dirname, 'certs', 'www.editissbank.com.key.pem')),

    cert: fs.readFileSync(path.join(__dirname, 'certs', 'www.editissbank.com.cert.pem'))

}, app)

server.listen(443, () => console.log("running on 443"))


