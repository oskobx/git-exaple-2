var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser());
var path = require("path");

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname +'/index.html'));
});

app.get('/index.css', function(req, res){
    res.sendFile(path.join(__dirname +'/index.css'));
});
app.get('/test', function(req, res){
    res.send("This is different route");
});

app.post('/test', function(req, res){
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(3000, function(){
    console.log("App is now running on port 3000");
});