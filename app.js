const express = require("express")
const mongoose = require('mongoose')
const app = express()

//設定連線到MONGODB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//取得資料庫連線狀態
const db = mongoose.connection
//連線異常
db.on('error', (req, res) => {
  console.log('mongodb error')
})
db.once('open', (req, res) => {
  console.log('mongodb connected')
})


app.get('/', (req, res) => {
  res.send('hello world')
})


app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})