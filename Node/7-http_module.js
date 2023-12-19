const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url==='/')
    {
        res.end("welcome to the backend part")
    }
    if(req.url==='/about')
    {
        res.end("the more information is here")
    }
    res.end(`
    <h1>Ooops!</h1>
    <h3>Something went wrong!!!</h3>
    `)
})
server.listen(5000)