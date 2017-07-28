var http = require("http");

function requestHandler(req,res){
    if(req.url == '/'){
        res.end("Welcome Here..!!");
    }

    else if(req.url=='/about'){
        res.end("Hello it is About Page");
    }

    else{
        res.end("<h1>Error 404 Not Found</h1>");
    }
}

var server = http.createServer(requestHandler);
server.listen(3000);
console.log("Server is running on port 3000");