var http = require("http");
var fileSystem = require('fs')

// function requestHandler(request, response){
//     if (request.url == "/"){
//     console.log("In comes a request to :"+ request.url)
//         response.end("Hello Harry..!!");
//     }
//     else if (request.url == '/home'){
//         response.end("Hello..!! This is Home Page");
//     }
//     else if (request.url == '/about'){
//         response.end("Hello.. This is About Page");
//     }
//     else{
//         response.end("<h1>Error 404 Not Found</h1>");
//     }
// }

//     function requestHandler(request,response){
//         fileSystem.readFile('data.txt', function(error, data){
//             if (error){
//                 console.log("Error", error)
//             }
//             response.end(data.toString());
//         })
//     }

// var server = http.createServer(requestHandler);
// server.listen(3000, function(){
//     console.log("Run server Listen on 3000 port");
// });



// ============= Using Express ===============

var express = require('express')
var app = express()

app.get('/',function(req, res){
    res.send("Hello Harry..!!")
})

app.get('/home', function(req, res){
    res.send("Home Page")
})

app.listen(3000, function(){
    console.log("Run server on port 3000");
})