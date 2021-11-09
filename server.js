const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('HTTP Request To Server Root Successful!')
})

app.get('/test', (req, res) => {
    res.send('Test Get Route')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})