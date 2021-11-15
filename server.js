const express = require('express')
const cors = require('cors')
const app = express()
const env = require('./env')
const mysql = require('mysql')

app.use(cors())
app.use(express.json())

const db = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b26139898f7bfd",
  password: "d848a9a7",
  database: "heroku_26a6fd4771db623",
  port: 3306,
  connectionLimit: 20
})

app.get('/', (req, res) => {
  res.json("Server Initialized")
})

app.get('/users/:id', (req, res) => {
  const sql = `SELECT * FROM USERS WHERE id="${req.params.id.toString()}"`

  db.query(sql, (err, results) => {
    try 
    {
      const result = results[0]

      const user = {
        id: result.id,
        email: result.email,
        username: result.username,
        password: result.password
      }

      return res.json(user)
    }

    catch (error)
    {
      return res.json({error: "Bad Request Error"})
    }
  })
})

app.post('/users', (req, res) => {
  const sql = `INSERT INTO USERS VALUES("${req.body.id}", "${req.body.email}", "${req.body.username}", "${req.body.password}")`

  db.query(sql, (err) => {
    try 
    {
      return res.json({sucess: "Request Successful"})
    }

    catch (error)
    {
      return res.json({error: "Bad Request Error"})
    }
  })
})

app.listen(env.PORT, () => {
  console.log(`Example app listening at http://localhost:${env.PORT}`)
})