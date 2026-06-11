require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const data = {
  "username": "johndoe",
  "email": "john@example.com",
  "age": 28,
  "isActive": true,
  "roles": ["user", "moderator"]
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {
    res.send('Logged in')
})

app.get('/data',(req,res) => {
    res.json(data)
})

app.get('/login/home',(req,res) => {
    res.send('<h1>Home Pageee<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})