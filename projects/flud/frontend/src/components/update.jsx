import axios from "axios"
import { useEffect, useState } from "react"
import { useParams,Link, useNavigate } from "react-router"


export let UpdateTodo = () => {
    let navigate = useNavigate()
    let {id} = useParams()
    let [todo,settodo] = useState([])
    let [newtodo,setnew] = useState({
        title : "",
        status : false
    })
    async function getuser(){
        try {
            let res = await axios.get(`http://localhost:3011/todos/get/${id}`)
            settodo(res.data)
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
        getuser()
    },[])

    let handleChange = (e) => {
        const { name, value } = e.target;
        settodo(e.target.value)
        setnew({...setnew,[name] : value})
      };

      async function handlesubmit(e) {
        e.preventDefault()
        let {title} = todo
        try {
            let url = `http://localhost:3011/todos/update/${id}`
            let res = await fetch(url,{
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(todo)
            })
            let result  = await res.json()
            alert("todo updated")
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
        <div style={{textAlign : "center",fontSize : "50px"}}>
        <h1>Update Todo</h1> 
        <Link to={"/Addtodo"} className="Link">Add new todo</Link> 
        </div>
        
        <form onSubmit={handlesubmit} style={{padding : "100px"}}>
        <input type="text" className="inputs"  placeholder="Enter Email" name="title" autoFocus value={todo.title} onChange={handleChange} /> <br /><br />
        <select style={{width : "150px",height : "50px",fontSize : "30px",margin : "auto",borderRadius : "10px",padding : "5px",backgroundColor : "powderblue"}} onSelect={handleChange} >
            <option value="false">False</option>
            <option value="true">True</option>
        </select> <br />
        <button style={{}} type="submit">Update Todo</button>
        </form>
        
        </>
    )
}