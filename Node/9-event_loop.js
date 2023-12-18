const { readFile } = require('fs')

console.log('first task is complete')

 readFile('./Node/path/F1.txt', 'utf8', (err, result) => {
     
    if (err) {

        console.log("error is accured")
        return
    }
    console.log(result)
    console.log("completed first task")


})
console.log("starting a new task")