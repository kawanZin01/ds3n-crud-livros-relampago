const bookmodel = require("../models/bookModel")

function getAllBooks(request, response) {
    const books = bookmodel.findAll()

    return response.json(books)
}

function createBook( req, res ) {

    const { title, author } = req.body
 
    const newBook = {
        id: Date.now(),
        title: title, 
        author
    }

    const createdBook = bookmodel.create(newBook)

    return res.status(201).json(createdBook)
}

const getBookById = (req, res) => {
    const id = Number(req.params.id)

    const book = bookmodel.findById(id)

    if(!book) {
        return res.status(404).json({
            message: "Livro não encontrado"
        })
    }

    return res.json(book)
}

const updateBook = (req, res) => {
    const id = Number(req.params.id)

    const { title, author } = req.body

    const newData = {
        title: title,author
    }

    const updatedBook = bookmodel.update(id, newData)

    if(!updatedBook) {
        return res.status(404).json({
            message: "Livro não encontrado"
        })
    }

    return res.json(updatedBook)
}

const deleteBook = (req, res) => {
    const id = Number(req.params.id)

    const deletedBook = bookmodel.remove(id)

    if(!deletedBook) {
        return res.status(404).json({
            message: "Livro não encontrado"
        })
    }

    return res.json({
        message: "Livro removido"
    })
}

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}