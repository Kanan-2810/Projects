const {readFile} = require('fs')
const { reject, result } = require('lodash')
const path = require('path')

const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err)
            {
                console.log("something went wrong")
            }
            console.log(data)
        })
        
    })
}
getText('./Node/path/F2.txt')
.then((result)=>console.log(result))
.catch((err)=>console.log(err))