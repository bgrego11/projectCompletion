var express = require('express');
var path = require('path');
var app = express()
var port = process.env.PORT || 8080;

// viewed at http://localhost:8080
app.use(express.static('css'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + "/about.html"));
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + "/errorpage.html"));
})



app.listen(port, function() {
    console.log('app is running on ' + port);
});