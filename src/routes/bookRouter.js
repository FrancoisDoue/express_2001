import { Router } from "express";
import book from "../controller/bookController.js";

const bookRouter = Router()

bookRouter.get('/', book.getAllBooks)
bookRouter.get('/:id', book.getBook)

bookRouter.post('/', book.addNewBook)
bookRouter.put('/:id', book.updateBook)
bookRouter.delete('/:id', book.deleteBook)

export default bookRouter