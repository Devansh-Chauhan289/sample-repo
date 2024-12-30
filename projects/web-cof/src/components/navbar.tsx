
import { Avatar, AvatarGroup, Divider, Heading, Image,Text, Tooltip } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router"


export let Navbar = ()=>{
    
    let navigate = useNavigate()

    let {loggedin}:any = useSelector((state : any)=>state.Reducerfunction)
    let [userlog,setlog] = useState<boolean>(loggedin)
    useEffect(()=>{
        setlog(loggedin)
    },[loggedin])
    
    function handlecreate(){
        if(!userlog){
            alert("user not logged in redirecting to login page")
            navigate("/login")
        }
        else{
            navigate("/create")
        }
       
    }

    return(
        <>
        <div id="navbar">
            <div>
                <Image src="https://i.pinimg.com/736x/39/3b/b1/393bb1bb15940aea508dd07c5da23917.jpg" width={"80px"}/>
            </div>
            <div>
                <Heading color={"white"} fontWeight={""}><b style={{fontWeight : "bolder",color:"#9e1b32"}}>It'ss</b>ESPRESSOO</Heading>
            </div>
            <div>
                <Text fontSize={"30px"} fontWeight={"bold"}><Link to={"/"}>Home</Link></Text> 
                <Divider orientation="vertical" height="100%" mx={4} />
                <Text fontSize={"30px"} fontWeight={"bold"} ><Link to={"/login"}>Login</Link></Text>
                <Divider orientation="vertical" height="100%" mx={4} />
                <Text fontSize={"30px"} fontWeight={"bold"} ><Link to={"/register"}>Register</Link></Text>
                <Divider orientation="vertical" height="100%" mx={4} />
                <Text fontSize={"30px"} fontWeight={"bold"} onClick={handlecreate} cursor={"pointer"}>Create Recipe</Text>
                
            </div>
            
            <div>
            <AvatarGroup >
                {
                    userlog? (
                        <Tooltip label = "USer logged">
                            <Avatar className="avatar" onClick={() => navigate("/login")} bg={"teal.500"}/>
                        </Tooltip>
                        
                    ) : (
                        <Tooltip label = "user not logged in">
                            <Avatar className="avatar" onClick={() => navigate("/login")} />
                        </Tooltip>
                        
                    )
                }
                </AvatarGroup>
            </div> 
            
        </div>
        
        </>
    )
}