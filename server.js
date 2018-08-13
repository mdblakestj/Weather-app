const express = require('express')
const app = express()
app.set('view engine', 'ejs')

const bodyParser = require('body-parser');
// ...
// ...
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})

app.get('/', function (req, res) {
  // NEW CODE
  res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use(express.static('public'));
