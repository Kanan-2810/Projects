const {readFileSync, writeFileSync} = require('fs')

const f1=readFileSync('./path/F1.txt','utf8')
const f2=readFileSync('./path/F2.txt','utf8')
const f3=writeFileSync('./path/F3.txt',`here is the result:,${f1},${f2}`,{flag:'a'})
