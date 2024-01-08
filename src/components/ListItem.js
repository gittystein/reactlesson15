import { useDispatch } from "react-redux";
import { deleteBook, addBook, selectedBookForEdit, bookDetails } from "../store/libraryBooks";
const ListItem = ({ one }) => {
    let dispatch = useDispatch();

    return (<div className="one-book">
        <h3>{one.name}</h3>
        <input type="button" onClick={() => { dispatch(deleteBook(one.id)) }} value={"מחק"} />
        <input type="button" onClick={() => { dispatch(selectedBookForEdit(one)) }} value={"עריכה"} />
        <input type="button" onClick={() => { dispatch(addBook(one)) }} value={"הוספה"} />
        <input type="button" onClick={() => { dispatch(bookDetails(one)) }} value={"הצגת פרטים"} />
    </div>)
}

export default ListItem;