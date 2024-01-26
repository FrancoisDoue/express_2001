import bookModel from "../model/book.js"
import bookMap from "../../services/mappers/bookMappers.js"

export default {
    getAllBooks: (_req, res) => {
        bookModel.getBooks((err, datas) => {
            if (err) return res.status(500).json(err)
            return res.json(datas.map(bookMap.bookMapAll))
        })
    },

    getBook: (req, res) => {
        bookModel.getBookById(req.params.id, (err, datas) => {
            if (err) return res.status(500).json(err)
            return res.json(datas.map(bookMap.bookMap))
        })
    },

    addNewBook: (req, res) => {
        const body = bookMap.addBookMap(req.body)
        bookModel.addBook(body, (err, response) => {
            if (err) return res.status(500).json(err)
            return res.status(201).json(response)
        })
    },

    updateBook: (req, res) => {
        bookModel.updateBook(req.params.id, bookMap.addBookMap(req.body), (err, datas) => {
            // la lisibilité c'est important...
            return err ? res.status(500).json(err) : res.status(201).json({datas, result: req.body})
        })
    },

    deleteBook: (req, res) => {
        bookModel.deleteBook(req.params.id, (err, datas) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json(datas)
        })
    }
}