var http = require('http')

var fs = require('fs')

http.createServer(function (req, res) {
    const file = fs.readFileSync('./Node/path/big_file.txt', 'utf8')
    res.end(file)
    const fileStream = fs.createReadStream('./Node/path/big_file.txt','utf8')
    fileStream.on('open',()=>
    {
        fileStream.pipe(res)
    })
    fileStream.on('err',()=>
    {
        res.end(err)
    })

}).listen(5000)