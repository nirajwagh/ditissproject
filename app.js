var express= require("express");
const { config } = require("winston");
const winston = require("winston");
const bodyParser = require("body-parser");
var app=express();
const logger = require('./winston/config')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get("/", function(req, res){
    res.render("login");
    logger.log('info', req.rawHeaders)
    
}).listen(3000);

app.get("/home", function(req, res){
    res.render("home");
});

app.post("/loginsuccess", function(req, res){


    logger.log('info', "Login Success: "+req.body.email)
    logger.log('info', req.socket.remoteAddress)
    res.render("home")

})

app.post("/loginfailed", function(req, res){
    
    logger.log('info', req.body.error);
    res.render("login")

})

console.log("Server Started at localhost:3000");
