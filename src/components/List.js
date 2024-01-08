import { useSelector } from "react-redux"
import ListItem from "./ListItem";

const List = () => {
    let arr = useSelector(state => state.arr);
    return (<>רשימת שירים
        <ul>
            {arr.map(item => <li key={item.id}>
                <ListItem one={item} />
            </li>)}
        </ul>
    </>)
}

export default List;
