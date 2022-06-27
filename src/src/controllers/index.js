const Book = require('../../models/Bookname')

const UserController = {

    async createBook(req, res) {

        const body = req.body

        try {

            const newBook = await Book.create(bodyData)
            return res.status(200).json(newBook)

        } catch(err) {

            return res.status(400).json(err)
            
        }

    },

    async getBooks(req, res) {
        const paramsData = req.paramns
        try {

            const users = await User.find()
            return res.status(200).json(book)

        } catch(err) {

            return res.status(400).json(err)

        } 

    },

    async getBooksById(req,res) {

        const { User_id } = req.params
        
        try {

            const user = await User.findById(User_id)
            return res.status(200).json(user)

        } catch(err) {

            return res.status(400).send(err)
        }

    }

}

module.exports = UserController.createBook