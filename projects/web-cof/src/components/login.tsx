import { Button, ButtonGroup, Heading, Input } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getusers, loginuser } from "../redux/actions"
import { useNavigate } from "react-router"
import { Navbar } from "./navbar"

export let Login : React.FC = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let {loggedin} :any = useSelector((state : any) => state.Reducerfunction)
    let {users} :any = useSelector((state : any) => state.Authreducer )

    
    let [userdata,setuserdata] = useState({
        email : "",
        password : ""
    })

    let [allusers,setall] = useState<any[]>([])

    useEffect(()=>{
        if(!users){
            dispatch<any>(getusers())
        }
    },[dispatch,users])

    useEffect(()=>{
        
        if(users){
            setall(Object.values(users))
            console.log(allusers)
        }
        
        
    },[users])

    function handlelog(){
        if (allusers){
            if(userdata.email.length>0 && userdata.password.length > 0 ){
                let email = userdata.email
                let pass = userdata.password
                if (allusers.length === 0) {
                    console.error("No users available to filter.")
                    alert("No users found. Please try again later.")
                    return
                }
                let loguser = allusers.find((item : any)=> item.email === email && item.password === pass)
                console.log(loguser)
                if(!loguser){
                    console.error("error");
                    alert("User Not found")
                    
                }
                else{
                    alert("user logged in successfully...")
                    dispatch(loginuser(true))
                    setTimeout(() => {
                        navigate("/")
                    }, 2000);
                }
                
            }
            else{
                dispatch(loginuser(false))
                alert("fields cant be empty")
            }
        }
        
        
    }

    function handleinput(e : any){
        setuserdata({
            ...userdata,
            [e.target.name] : e.target.value
        })
        
    }

    let isloading = !users

    return(
        <div className="body">
            <div >
            <Navbar/>
            <Heading paddingTop={"100px"} textAlign={"center"}>START CREATING YOUR OWN RECIPE WITH </Heading>
            <Heading textAlign={"center"} color={"#A52A2A"} fontSize={"6xl"}>Espressoo</Heading>
            <div style={{padding : "100px", display:"flex",flexDirection : "column",gap : "20px"}}>
            <Input margin={"auto"} width={"600px"} backgroundColor={"aliceblue"} type="email" required placeholder="Enter Email" name="email" value={userdata.email} onChange={handleinput} disabled = {isloading} />
            <Input margin={"auto"} width={"600px"} backgroundColor={"aliceblue"} type="password" required placeholder="Enter Pass" name="password" value={userdata.password} onChange={handleinput} disabled = {isloading}/>

            <ButtonGroup margin={"auto"} spacing={"20px"}>
            <Button width={"300px"} onClick={handlelog} _hover={{backgroundColor : "orange"}} disabled = {isloading}>{isloading? "loading" : loggedin ? "user logged"  : "Not logged"}</Button>
            <Button onClick={()=> navigate("/register")} disabled={isloading}>{isloading ? "loading" :"Not Registered? Register Here" }</Button>
            </ButtonGroup>

            </div>

            </div> 

        </div>

    )
}