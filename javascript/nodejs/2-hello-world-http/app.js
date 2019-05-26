/*
file: 2-hello-world-http/app.js
run in console: node app
open in web browser: http://localhost:3000/
open in web browser: http://localhost:3000/abc
*/

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

}).listen(3000);
