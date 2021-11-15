const express = require('express')
const cors = require('cors')
const app = express()
const env = require('./env')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json("Server Initialized")
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id.toString()
  
  let charCodes = ""

  for (let i = 0; i < id.length; i++)
  {
    charCodes += id.charCodeAt(i)
  }

  let user = {
    id: id,
    email: `${charCodes}@gmail.com`,
    username: `${charCodes}`,
    password: `password`,
  }

  res.json(user)
})

app.post('/users', (req, res) => {
  res.json(req.body)
})

app.listen(env.PORT, () => {
  console.log(`Example app listening at http://localhost:${env.PORT}`)
})