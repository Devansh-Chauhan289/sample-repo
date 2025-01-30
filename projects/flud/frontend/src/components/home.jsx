import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";


export let Home = () => {
    let [mytodos,settodos] = useState([])
    let navigate = useNavigate()
    async function getdata() {
        try {
            let res = await axios.get("http://localhost:3011/todos/get")
            settodos(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function handledelete(id) {
        
        try {
            let res = await axios.delete(`http://localhost:3011/todos/delete/${_id}`);
    
            if (res.status === 200) {
                alert("Todo deleted successfully");
            } else {
                alert("Something went wrong");
            }
        } catch (error) {
            console.error("Error deleting todo:", error);
            alert("Failed to delete todo");
        }
    }
    
    
    useEffect(()=>{
        getdata()
    },[])


    return(
        <>
        <h1 style={{textAlign:"center",fontSize:"60px"}}>Your Todos </h1>  <button className="card-button" style={{marginLeft : "42%",marginBottom : "100px", marginTop : "100px"}} onClick={()=> navigate(`/Addtodo`)}>Add new todo</button>
        <div style={{border : "2px solid transparent",height : "auto",width : "fit-content",margin : "auto",padding : "60px",borderRadius: "10px",backgroundColor : "powderblue"}}>
        {
            mytodos.map((e)=>(
                <>
                
                    <div className="card" key={e._id}>
                    <h1 style={{fontSize : "40px",fontStyle : "italic"}}>{e.title}</h1>
                    <button className="card-button" onClick={()=>handledelete(e._id)}>Delete</button>
                    <button className="card-button" onClick={()=> navigate(`/update/${e._id}`)}>Update</button>
                    </div>
                    
                
                </>
            ))
        }
        </div>
        
        
        </>
    )
}