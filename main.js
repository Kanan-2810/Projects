const express = require('express')

const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
    res.send('<h1>HOME PAGE</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product)=>{
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)

})
app.get('/api/products/:id',(req, res) => {
    const singleProduct = products.find((product) => product.id === parseInt(req.params.id))
    console.log(singleProduct)
    res.json(singleProduct)
})
app.listen(5000, () => {
    console.log("port is listning on port 5000...");
})