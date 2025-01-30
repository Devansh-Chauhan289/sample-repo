import { useParams } from "react-router"


export let DeleteTodo = () => {
    let {id} = useParams()
    console.log(id);
    return(
        <>
        </>
    )
}