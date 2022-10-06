const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const users = require('./controller/usersSave.js')
const login = require('./controller/loginUser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const PORT = process.env.PORT || 3001

let uri =
  'mongodb+srv://tshepomashiloane:<password>@cluster0.yuwyjxq.mongodb.net/?retryWrites=true&w=majority'
mongoose
  .connect(uri)
  .then(() => {
    console.log('connected')
  })
  .catch(() => {
    console.log('not connected')
  })

app.post('/SignUp', async (req, res) => {
  await users.store_user(req, res)
})

app.post('/Login', async (req, res) => {
  await login.login(req, res)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
