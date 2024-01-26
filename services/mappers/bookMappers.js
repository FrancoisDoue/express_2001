const bookMap = (book) => {
    return {
        ...book,
        disponible: !!book.disponible,
    }
}

const bookMapAll = (book) => {
    return {
        ...bookMap(book),
        uri: `/book/${book.id}`
    }
}

const addBookMap = (body) => {
    return [body.titre, body.auteur, body.annee_publication]
}

export default { bookMap, bookMapAll, addBookMap }