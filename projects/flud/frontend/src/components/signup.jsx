import { useState } from "react"
import axios from "axios"
// import {useNavigate} from "react-router"


export let UserSignIn = () => {
    // let navigate = useNavigate()
    let [signup,setsignup] = useState({
        email : "",
        password : ""
    })
    let [loading,setloading] = useState(false)

    let handleChange = (e) => {
        const { name, value } = e.target;
       
        setsignup({ ...signup, [name]: value });
      };

    async function SignIn(e){
        e.preventDefault()
        let {email,password} = signup

        setloading(true)
        try {
            let url = "http://localhost:3011/todos/signup"
            let res = await fetch(url,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(signup)
            })

            let result = await res.json()
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <>
        <form onSubmit={SignIn} >
            <h1 style={{textAlign : "center",fontSize : "60px"}}>Sign In For Creating Todos</h1>
            <div className="form-data">
            <input type="text" className="inputs"  placeholder="Enter Email" name="email" autoFocus onChange={handleChange} value={signup.email} /> <br />
            <input type="text" className="inputs" placeholder="Enter Password" name="password" autoFocus onChange={handleChange} value={signup.password} /> <br />
            <button type="submit">Sign In</button>
            </div>
        
        
        </form>

        </>
    )
}