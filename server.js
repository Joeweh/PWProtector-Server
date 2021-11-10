const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Construct JSON Objects For Each Root As Response

app.get('/', (req, res) => {
  res.send('HTTP Request To Server Root Successful!')
})

app.post('/', (req, res) => {
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})