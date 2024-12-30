import { Input,Button,Text, UnorderedList, ListItem, Heading, Box } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createcoffee } from "../redux/actions"
import { Navbar } from "./navbar"


export let Create = () =>{

    let dispatch = useDispatch()

    let [ingredient,setingredient] = useState<string>("")

    let [coffee , setcoffee] = useState({
        title : "",
        description : "",
        price : 0,
        ingredients : [],
        image : ""
    })



    function handleinput(e : any){
        setcoffee({
            ...coffee,
            [e.target.name] : e.target.value
        })
    }

    // function handleimage(e : any){
    //     let pic = e.target.files[0]
    //     setcoffee({
    //         ...coffee,
    //         image : URL.createObjectURL(pic)
    //     })
    // }
    function handleingredients(e: any) {
        
        setcoffee((prevState : any) => ({
            ...prevState,
            ingredients: [...prevState.ingredients, ingredient]
        }));
        setingredient("")
    }


    function handlecreate(){
            dispatch<any>(createcoffee(coffee))
            
    }

    return(
        <div className="body">
        <Navbar/>
        <Heading fontFamily={"sans-serif"} fontWeight={"extrabold"} fontSize={"5xl"} textAlign={"center"} paddingTop={"100px"}>CREATE YOUR OWN RECIPE WITH ESPRESSOO</Heading>
        <div style={{paddingTop:"100px",paddingBottom:"100px",display : "flex",justifyContent:"space-around"}} >
            
        <Box maxH={"600px"}  width={"500px"} display={"flex"} flexDirection={"column"} gap={"20px"} >

            <Input bg={"aliceblue"} name="title" type="text" value={coffee.title} onChange={handleinput} placeholder="Title"/>

            <Input bg={"aliceblue"} name="description" type="text" value={coffee.description} onChange={handleinput} placeholder="description"/>

            <Input bg={"aliceblue"} name="price" type="number" value={coffee.price} onChange={handleinput} placeholder="price"/>

            <Input bg={"aliceblue"} name="ingredients" type="text" value={ingredient} placeholder="ingredients" onChange={(e) => setingredient(e.target.value)}/>

            <Button width={"200px"} margin={"auto"} onClick={handleingredients} _hover={{backgroundColor : "#A52A2A",color:"white"}}>Add ingredient</Button>

            <Input bg={"aliceblue"} name="image" type="text" placeholder="Enter image URL" onChange={handleinput} />

            <Button width={"200px"} margin={"auto"} onClick={handlecreate} _hover={{backgroundColor : "#E52B50",color:"white"}}>Create Recipe</Button>
            
        </Box>
        <div>
        <Heading textAlign={"center"} color={"#DDA0DD"}>INGREDIENTS</Heading>
        <br />
        {   
                coffee.ingredients ? (
                    
                    coffee.ingredients.map((ele:any)=>(
                        <>
                            <Text textAlign={"center"}>  {ele}</Text>
                        
                        </>
                        
                    ))
                ) :(
                    <Heading>Non ingredients</Heading>
                )
            }
           
        </div>
        
        </div>
        </div>
    )
}