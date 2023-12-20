const express = require('express')
const { people } = require('./data')
const app = express()
const newpeople = require('./routes/people')
//const auth = require('./routes/auth')

app.use(express.static('./methodes_public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/people',newpeople)
app.use('/login',auth)



// app.post('/login', (req, res) => {
//     const { name } = req.body

// })
app.listen(5000, () => {
    console.log("server is running on port 5000")
})