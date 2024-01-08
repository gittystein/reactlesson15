export const addBook = (book) => {
    return {
        type: "ADD_BOOK",
        payload: book
    }
}

export const selectedBookForEdit = (book) => {
    return {
        type: "SELECTED_BOOKS_FOR_EDIT",
        payload: book
    }
}

export const bookDetails = (bookId) => {
    return {
        type: "SELECT_BOOK",
        payload: bookId
    }
}

export const deleteBook = (bookId) => {
    return {
        type: "DELETE_BOOK",
        payload: bookId
    }
}

export const editBook = (bookId) => {
    return {
        type: "EDIT_BOOK",
        payload: bookId
    }
}

export const saveEditBook = (book) => {
    return {
        type: "SAVE_EDIT_BOOK",
        payload: book
    }
}