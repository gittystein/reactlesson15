
const myInatinalState = {
    arr: [
        { name: "ילדים מספרים על עמצם", id: 123, price: 50, src: "https://chaimwalder.co.il/wp-content/uploads/%D7%99%D7%9C%D7%93%D7%99%D7%9D-%D7%9E%D7%A1%D7%A4%D7%A8%D7%99%D7%9D-%D7%A2%D7%9C-%D7%A2%D7%A6%D7%9E%D7%9D-61.jpg", author: "חיים ולדר" },
        { name: "מעולמם של ילדים", id: 124, price: 40, src: "https://www.alterbooks.co.il/wp-content/uploads/2020/04/%D7%9E%D7%A2%D7%95%D7%9C%D7%9E%D7%9D-%D7%A9%D7%9C-%D7%99%D7%9C%D7%93%D7%99%D7%9D-9.jpg", author: "דן מלך" },
        { name: "הילגדים מקצה המחנה", id: 125, price: 70, src: "https://www.sifreiorhachaim.co.il/wp-content/uploads/2021/06/1090329-4.jpg", author: "רות רפפורט" },
        { name: "המסע הארוך של נאן", id: 126, price: 60, src: "https://www.alterbooks.co.il/wp-content/uploads/2021/04/%D7%94%D7%9E%D7%A1%D7%A2-%D7%94%D7%90%D7%A8%D7%95%D7%9A-%D7%A9%D7%9C-%D7%A0%D7%90%D7%9F.jpg", author: "לאה פריד" }
    ],
    selectedBook: null,
    selectedBookForEdit: null
}

export const bookReducer = (state = myInatinalState, action) => {

    switch (action.type) {
        case "ADD_BOOK":
            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: state.selectedBookForEdit,
                arr: [...state.arr, action.payload]

            }
        case "SELECT_ALL_BOOKS":
            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: state.selectedBookForEdit,
                arr: state.arr
            }
        case "SELECT_BOOK":
            return {
                selectedBook: action.book,
                selectedBookForEdit: state.selectedBookForEdit,
                arr: state.arr
            }
        case "DELETE_BOOK":
            return {
                selectedBook: state.selectedBook?.id != action.payload ? state.payload.selectedBook : null,
                selectedBookForEdit: state.selectedBookForEdit?.id != action.payload ? state.payload.selectedBookForEdit : null,
                arr: state.arr.filter(item => item.id != action.payload)
            }
        case "EDIT_BOOK":
            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: state.selectedBookForEdit,
                arr: [...state.arr, action.payload]
            }
        case "SAVE_EDIT_BOOK":
            let copy = state.arr.map(item => {
                if (item.id !== action.payload.id)
                    return item;
                return action.payload;
            })

            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: null,
                arr: copy
            }


        default: return state;

    }
}