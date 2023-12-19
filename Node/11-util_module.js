
const {readFile, writeFile} = require('fs')
 const util=require('util')
 const readfilePromise = util.promisify(readFile)
 const writefilePromise = util.promisify(writeFile)
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
// getText('./path/F2.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))

const Start = async ()=>{
    try{
        const f2= await getText('./path/F2.txt')
        const f1= await getText('./path/F1.txt')
        await writefilePromise(
            './path/F4.txt',`here is the new file:${f1} ${f2}`
        )
        //console.log(f1,f2)
       

    }
    catch(err)
    {
        console.log("error")
    }
}
Start()