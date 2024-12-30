import React, { useEffect, useState } from "react"
import { getusers, registeruser } from "../redux/actions"
import { Input,Button, Heading,Text,Box } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { Navbar } from "./navbar"
import { useNavigate } from "react-router"

export let Register : React.FC = ()=>{

    let dispatch = useDispatch()
    let navigate = useNavigate()
    

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
    
        function handleregister(){
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
                    if(loguser){
                        console.error("error");
                        alert("User alrdy exist")
                        
                    }
                    else if(!loguser){
                        alert("user logged in successfully...")
                        dispatch<any>(registeruser(email,pass))
                        setTimeout(() => {
                            navigate("/login")
                        }, 1000);
                    }
                    
                }
                else{
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
            <Navbar/>
            <Heading paddingTop={"40px"} textAlign={"center"} fontSize={"5xl"}>GETTING STARTED WITH </Heading>
            <Heading fontSize={"7xl"} fontFamily={"sans-serif"} color={"#A52A2A"} textAlign={"center"}>Espressoo</Heading>
            
            <div style={{display : "flex",flexDirection : "column",gap : "20px",padding:"100px",margin : "auto"}}>
            <Input margin={"auto"} backgroundColor={"aliceblue"} width={"500px"} placeholder="Email" disabled={isloading} value={userdata.email} onChange={handleinput} required type="email" name="email" />

            <Input margin={"auto"} backgroundColor={"aliceblue"} width={"500px"} placeholder="password" disabled={isloading} value={userdata.password} onChange={handleinput} required  type="password" name="password"/>

            <Button margin={"auto"} width={"300px"} onClick={handleregister} _hover={{backgroundColor : "orange"}} disabled={isloading}>{isloading? "loadingg..":"Register user"}</Button>

            
            </div>


        </div>
    )
}