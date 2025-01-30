import { useState } from "react"
import { useNavigate } from "react-router";


export let Addtodo = ()=>{
    let navigate = useNavigate()
    let [todo,settodo] = useState({
        title : ""
    })

    let handleChange = (e) => {
        const { name, value } = e.target;
       
        settodo({ ...settodo, [name]: value });
      };
    
    async function handlesubmit(e) {
        e.preventDefault()
        let {title} = todo
        try {
            let url = "http://localhost:3011/todos/create"
            let res = await fetch(url,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(todo)
            })
            let result  = await res.json()
            alert("todo added")
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <h1 style={{textAlign : "center",fontSize : "60px"}}>Add new Task</h1>
        <form onSubmit={handlesubmit} style={{padding : "50px"}} >
            <input type="text" className="inputs" name="title" placeholder="Enter Task" value={todo.title} onChange={handleChange} />
            <button type="submit">Add todo</button>
        </form>
        </>
    )
}