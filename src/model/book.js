import db from "../../config/db.js";


export default {
    getBooks: (cb) => {
        db.query('SELECT * FROM livres', cb)
    },

    getBookById: (id, cb) => {
        db.query('SELECT * FROM livres WHERE id = ?', id, cb)
    },

    addBook: (value, cb) => {
        db.query('INSERT INTO livres (titre, auteur, annee_publication) VALUES (?,?,?)', value, cb)
    },

    updateBook: (id, value, cb) => {
        db.query('UPDATE livres SET titre= ?, auteur= ?, annee_publication= ? WHERE  id = ?', [...value, id], cb)
    },
    
    deleteBook: (id, cb) => {
        db.query('DELETE FROM livres WHERE id = ?', id, cb)
    }
}