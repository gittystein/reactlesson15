import { saveEditBook, selectedBookForEdit } from "../store/libraryBooks";
import { useForm } from 'react-hook-form';


const Edit = () => {

    let { register, handleSubmit } = useForm({
        defaultValuse: selectedBookForEdit
    });

    const save = (data) => {
        alert(JSON.stringify(data))
        dispatchEvent(saveEditBook(data))
    }

    return (<form onSubmit={handleSubmit(save)}>

        <label>שם</label>
        <input {...register("name")} />
        <label>קוד</label>
        <input {...register("id")} />
        <label>מחיר</label>
        <input {...register("price")} />
        <label>תמונה</label>
        <input {...register("src")} />
        <label>שם המחבר</label>
        <input {...register("author")} />

        <input type="submit" />
    </form>)
}
 
export default Edit;