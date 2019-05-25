# Tutorials : JavaScript : Node.js

## What is Node.js

Node.js is an open-source runtime environment that runs JavaScript applications outside of a web browser. 
It is built on Chrome V8 JavaScript Engine and is perfect for develop server side JavaScript applications.

## How to install Node.js

* [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Ubuntu / Linux Mint: `sudo apt install nodejs`

## Node.js documentation

* [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)

## Hello World!

**1-hello-world/app.js**

```javascript
function hello(name) {
    console.log('Hello ' + name);
}

hello('World');
```

How to run: `$ node hello-world`

**2-hello-world-http/app.js**

```javascript
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
```

How to run: `$ node hello-world-http` <br/>
In your browser: `http://localhost:3000`

---

## Free resources

* [Node.js Notes for Professionals (PDF)](https://books.goalkicker.com/NodeJSBook/NodeJSNotesForProfessionals.pdf)
* [The NodeJS Cluster Module](https://leanpub.com/thenodejsclustermodule/read)
* [The definitive Node.js handbook](https://medium.freecodecamp.org/the-definitive-node-js-handbook-6912378afc6e)