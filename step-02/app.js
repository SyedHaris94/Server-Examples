var express = require ('express');
var http = require('http');
var app = express()

// app.get('/',(req, res)=>{
//     res.send("hello world");
// })

// app.get('/home', (req, res) => {
//     res.send("Home Page");
// })


// 

// app.use(function (request, response,next) {
//      response.writeHead(200, { "Content-Type": "text/plain" });
//      response.end("Hello, World!");
//     console.log("run middleware2121121")
//     next()
// })


// app.use((res,req)=>{
//     console.log("Logging Done")
//     next()  
// })

app.use((request, response, next) => {
    var minuts = (new Date()).getMinutes()
    if ((minuts % 2) === 0) {
        next()
    } else {
        response.send("User Not Authorized")
    }
})

app.use((request, response) => {
    response.send("Auth Success Send Informission")
})

app.listen(3000, function(){
    console.log("Run server on port 3000");
})