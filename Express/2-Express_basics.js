const express = require('express')

const app = express()
app.get('/',(req,res)=>{
    console.log('you are done')
    res.status(200).send('Home Page')
})
app.get('/about',(req,res)=>{
    console.log('more information')
    res.status(200).send('about Page')
})
app.get('*',(req,res)=>{
    console.log('Something went wrong')
    res.status(400).send('error page')
})
app.listen(5000,()=>{
    console.log("server is running on port 1000")
})