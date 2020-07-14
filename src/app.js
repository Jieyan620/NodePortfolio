const express = require('express')
const path = require('path')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
  res.render('index', {
    title: "home",
    name: "Jie"
  })
})

app.get('/about', function (req, res) {
  res.render('about', {
    title: "home",
    name: "Jie"
  })
})

app.listen(3000)