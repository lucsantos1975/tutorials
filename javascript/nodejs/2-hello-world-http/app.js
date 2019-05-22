/***********************************************************
1) Create 2-hello-world-http folder
2) Create app.js file
3) Run in console: $ node app
4) Open in web browser: http://localhost:8080
***********************************************************/

const http = require('http');

function index(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.end("Hello World!");
}

http.createServer(function (request, response) {
    
    if (request.url === "/") {
        return index(request, response);
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);

}).listen(8080);
