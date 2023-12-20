const express=require('express')
// use of middleware
const app=express();
const logger = require('./logger')
const authorize=require('./Authorize')
app.use([authorize,logger])

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
app.get('/api', (req, res) => {
    res.send('API')
  })

app.get('/api/items' ,(req, res) => {
  res.send('ITEMS')
})
app.get('/api/products', (req, res) => {
  res.send('PRODUCTS')
})
.listen(5000,()=>{
    console.log("the port is running on port 5000")
})
