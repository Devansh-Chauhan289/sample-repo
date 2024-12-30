import { useEffect, useState } from "react"
import { getdata, sortdata } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { Card, CardBody, CardFooter,
    Image, Stack, Heading, Text, Button,
    Divider,ButtonGroup, Input,Select,IconButton
 } from '@chakra-ui/react'
 import {SearchIcon} from "@chakra-ui/icons"
import { Navbar } from "./navbar"
import { useNavigate } from "react-router"
import { Timer } from "./timer"


// interface initialdata{
//     mydata : any,
//     loggedin : boolean,
//     loading : boolean,
//     error : boolean,
//     sorteddata : any
// }


export let Home : React.FC = ()=>{
    
    let {mydata } : any  = useSelector((state : any)=> state.Reducerfunction)
    
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let [ogdata,setdata] = useState<any[]>([])
    let [filterdata,setfilter] = useState<any[]>([])

    useEffect(() => {
        if (!mydata) {
          dispatch<any>(getdata())  
        } else {
          setdata(Object.entries(mydata))  
          
        }
      }, [dispatch, mydata])

    useEffect(()=>{
        setfilter(ogdata)
        console.log(ogdata)
    },[ogdata])


    // Handle Sorting
    function handlesort(e : any){
        let order = e.target.value
        dispatch(sortdata(order))
    }


    // Handle Searching
    function handlesearch(e : any){
        
        filtercoffee(e.target.value)
    }

    function filtercoffee(query : string){
        let updatedata = ogdata
        if (query){
            updatedata = updatedata.filter((item : any)=>
                item.title.toLowerCase().includes(query.toLowerCase())
            )
        }
        
        setfilter(updatedata)
    }



    return(
        
        <div className="body">
            
            <Navbar/>

            <Timer/>
            <Heading textAlign={"center"}padding={"30px 10px"} color={"#AA0000"}>ESPRESSOO's Wide Range</Heading>

            <div style={{display:"flex", justifyContent : "space-around",margin:"30px 20px"}}>
                <div>
                <IconButton 
                colorScheme= 'orange'
                aria-label='Search database'
                icon={<SearchIcon />}
                />
                <Input type="text" placeholder="search Text" onChange={handlesearch} backgroundColor={"white"} width={"400px"}  />
                </div>
           
                <Select onChange={handlesort} backgroundColor={"white"} width={"200px"}>
                    <option value="">sort order</option>
                    <option value="asc">Low to High : Price</option>
                    <option value="desc">High to Low : Price</option>
                </Select>

            </div>
        <div className="cards-cont">
        {filterdata.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          filterdata.map((e: any) => (
            <div key={e.id} className="card">
                <Card maxW='sm'height={"600px"} backgroundColor={"antiquewhite"} boxShadow={"2xl"}>
                    <CardBody>
                        <Image textAlign={"center"} margin={"auto"}
                        width={"320px"} height={"300px"}
                        src={e[1].image}
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{e[1].title}</Heading>
                        <Text>
                            {e[1].description}
                        </Text>
                        
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue' onClick={()=> navigate(`/details/${e[1].id}`)}>
                            Learn More
                        </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </div>
          ))
        )}
      </div>
        </div>
    )
}