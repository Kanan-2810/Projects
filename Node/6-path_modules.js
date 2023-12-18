const path = require('path')
const filepath= path.join('/path/','subfolder','text.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)