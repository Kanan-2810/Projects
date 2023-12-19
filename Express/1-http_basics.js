const http = require("http")
const {readFileSync} = require('fs')

const homepage = readFileSync('./index.html')

http.createServer(function (req, res) {
    const url=req.url;
    console.log("user hit the server")
    console.log(req.method)
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homepage)
        res.end()

    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h3>Information page</h3>')
        res.end()

    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page Not Found</h1>')
        res.end()

    }

}).listen(4000)