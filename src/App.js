import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import List from "./components/List";
import BookDetails from "./components/bookDetails";
import Edit from "./components/edit";

function App() {
  let selected = useSelector(st => st.selectedBook);
  let selectedForEdit = useSelector(st => st.selectedBookForEdit)
  return (<>
    <List />
    {selected && <BookDetails />}
    {selectedForEdit && <Edit />}
  </>
  );
}

export default App;
