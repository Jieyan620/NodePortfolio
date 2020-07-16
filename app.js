const express = require('express')
const path = require('path')
const app = express()

const publicDirectoryPath = path.join(__dirname, '/public')
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

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server listening on port " + port);
});