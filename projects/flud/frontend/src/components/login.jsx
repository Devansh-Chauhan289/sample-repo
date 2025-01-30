import { useState } from "react"
import { useNavigate } from "react-router"


export let Login = () => {

    let [login,setlogin] = useState({
        email : "",
        password : ""
    })

    function handleChange(e){
        let navigate = useNavigate()
        let {name,value} = e.target.value

        setlogin({...login,[name] : value})
    }

    async function handlesubmit(e){
        e.preventDefault()
        let {email,password} = login
        try {
            let url = "http://localhost:3011/todos/login"
            let res = await fetch(url,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(login)
            })
            let result = await res.json()
            let {msg,access} = result

            if(res.status == 200 && access){
                localStorage.setItem("accessToken",access)
                navigate("/add")
            }
        } catch (error) {
            
        }
    }

    return(
        <>
        <form onSubmit={handlesubmit} >
            <h1 style={{textAlign : "center",fontSize : "60px"}}>Log In For Creating Todos</h1>
            <div className="form-data">
            <input type="text" className="inputs"  placeholder="Enter Email" name="email" autoFocus onChange={handleChange} value={login.email} /> <br />
            <input type="text" className="inputs" placeholder="Enter Password" name="password" autoFocus onChange={handleChange} value={login.password} /> <br />
            <button type="submit">Log In</button>
            </div>
        
        
        </form>
        </>
    )
}