import { useSelector } from "react-redux"

const BookDetails = () => {
    let selected = useSelector(st => st.selectedBook);
    return(<div>
        <h3>{selected.name}</h3>
        <h4>{selected.id}</h4>
        <h4>{selected.price}</h4>
        <h4>{selected.src}</h4>
        <h4>{selected.author}</h4>
    </div>)
}

export default BookDetails;