

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/hello', function (req, res) {
    res.send('Hello World!');
});


app.get('/ch', function (req, res) {
    res.send('Hello World!');
});


//regular expressions

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd');
});
// will match abcd, abbcd, abbbcd, and so on
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd');
});
// will match abcd, abxcd, abRABDOMcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd');
});
// will match /abe and /abcde
app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e');
});

// ---------------------------------------------------

var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}
var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}
var cb2 = function (req, res) {
    res.send('Hello from C!');
}
app.get('/example/c', [cb0, cb1, cb2]);



var fetch = function (req, res, next) {
    console.log('CB0');
    // next();//moves to businessLogic

    setTimeout(function(){
        next();
    },1000);
}
var businessLogic = function (req, res, next) {
    console.log('CB1');
    // res.send('CB1');--- WILL GIVE ERROR,  RESPONSE ALREADY SENT AND SENDING AGAIN IN prepareResponse
    next();//moves to prepareResponse
}
var prepareResponse = function (req, res) {
    res.send('Hello from C!');
}
app.get('/student', [fetch, businessLogic, prepareResponse]);




var server = app.listen(3002, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});