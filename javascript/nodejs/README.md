# Tutorials : JavaScript : Node.js

## 1) What is Node.js

Node.js is an open-source runtime environment that runs JavaScript applications outside of a web browser. 
It is built on Chrome V8 JavaScript Engine and is perfect for develop server side JavaScript applications.

## 2) How to install Node.js

* [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Ubuntu / Linux Mint: `sudo apt install nodejs`

## 3) Node.js documentation

* [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)

## 4) Hello World!

**1-hello-world/app.js**

```javascript
function hello(name) {
    console.log('Hello ' + name);
}

hello('World');
```
Go to `<your workspace>/1-hello-world/` <br/>
Run in console: `node app`

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
Go to `<your workspace>/2-hello-world-http/` <br/>
Run in console: `node app` <br/>
Open in web browser: `http://localhost:3000/`

---

## Free resources

* [Node.js Notes for Professionals (PDF)](https://books.goalkicker.com/NodeJSBook/NodeJSNotesForProfessionals.pdf)
* [The NodeJS Cluster Module](https://leanpub.com/thenodejsclustermodule/read)
* [The definitive Node.js handbook](https://medium.freecodecamp.org/the-definitive-node-js-handbook-6912378afc6e)