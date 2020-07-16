const express = require('express')
const path = require('path')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
  res.render('index', {
    title: "home"
  })
})

app.get('/about', function (req, res) {
  res.render('about', {
    title: "about"
  })
})

var port = process.env.PORT || 3001
app.listen(port, function () {
  console.log("app running on port 3001");
})