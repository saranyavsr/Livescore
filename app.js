var express = require("express");
var app = express();
var http = require('http');
var fs = require('fs');

app.use(express.static(__dirname + "/public"));

app.get("/", function(httpRequest, httpResponse, next){
     httpResponse.sendFile(__dirname + "/public/html/index.html");
})

// Loading the index file . html displayed to the client
var server = http.createServer(app);

// Loading socket.io
var io = require('socket.io').listen(server);
//(server, {path: "/socket-io"});

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
});

server.listen(8080);