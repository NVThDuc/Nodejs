const express = require('express')
const app = express()
const port = 3000
const router1 = require('./router')

app.get('/', (req, res) => {
  res.send('NodeJS start by Nguyen Van Thanh Duc')
})
app.use('/',router1)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})