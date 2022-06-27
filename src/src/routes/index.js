const { Router } = require('express')

const UserController = require('../controllers/UserControllers')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Olá mundo!')
})

routes.post('/booksname', UserController.createBook)
routes.get('/booksname', UserController.getBooks)
routes.get('/users/:user_id', UserController.getBooks)

routes.post('/date')
routes.get('/date')

routes.get('/author/:author_id')

routes.post('/books')

routes.post('/books/:author_id')
routes.get('/books/:author-id')
routes.patch('/books/:author_id/:book_id')
routes.delete('/books/author_id/:book_id')

routes.get('/books')
routes.get('/books/:book_id')


module.exports = routes