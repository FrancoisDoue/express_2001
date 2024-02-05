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

export default { bookMap, bookMapAll }