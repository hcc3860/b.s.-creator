const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateBullshit = require('./generate_bullshit')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', (req, res) => {
  const options = req.body
  const meaningless = generateBullshit(options)
  console.log(options)
  res.render('index', { meaningless: meaningless, options: options })
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`express is listening on port ${port}`)
})
