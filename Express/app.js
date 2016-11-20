var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.send('Hello to the Big world')
})

var books = [{
  title: 'book 1',
  price: 10
}, {
  title: 'book 2',
  price: 20
}, {
  title: 'book 3',
  price: 30
}]


app.get('/books', (req, res) => {
  console.log('You were just hit')
  res.json(books)
})

app.get('/book/:id', (req, res) => {
  console.log('You were just hit on book ', req.params.id );
  var book = books[req.params.id]
  res.json(book)
})

app.post('/books', (req, res) => {
  console.log('this is the req.body ', req.body);
  books.push(req.body)
  console.log('Somone just added a book ', req.body);
  res.json(books)
})

app.put('/book/:id', (req, res) => {
  var book = req.body
  var bookToEdit = books[req.params.id]
  bookToEdit = book
  books.push(bookToEdit)
  res.json(bookToEdit)
})

app.delete('/book/:id', (req, res) => {
    var bookToDelete = books[req.params.id]
    books.splice(req.params.id, 1)
    res.json(book)
})

app.listen(3000, () => console.log('Express is running on port 3000'))
