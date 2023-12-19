const {createReadStream} = require('fs')

const stream = createReadStream('./path/big_file.txt')

stream.on('data',(result)=>{
    console.log(result)
})