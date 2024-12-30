import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getdata } from "../redux/actions"
import { Image,Stack,CardBody,Heading,Text,CardFooter,Card, UnorderedList, ListItem } from "@chakra-ui/react"
import { Navbar } from "./navbar"


interface RootState {
    Reducerfunction: {
      mydata: { [key: string]: coffeedata } | null; // Explicitly typing mydata as an object of coffeedata
    };
  }

interface coffeedata{
    title : string,
    id : number,
    description : string,
    ingredients :string[],
    image : string,
    price : number
}

export let CoffeeDetails : React.FC = ()=>{
    let {id} = useParams()
    let dispatch = useDispatch()
    let { mydata }: { mydata: { [key: string]: coffeedata } | null } = useSelector(
        (state: RootState) => state.Reducerfunction
      );    let [filterdata,setdata] = useState<coffeedata | null>(null)

    let isloading = !mydata

    useEffect(()=>{
        if(!mydata){
            dispatch<any>(getdata())
        }
    },[dispatch,mydata])

    useEffect(()=>{
        if(mydata && id){
            let coffee = Object.values(mydata).find((item : coffeedata)=> item.id === parseInt(id))
            setdata(coffee || null)
        }
        
    },[mydata,id])


    return(
        <>
        <div style={{paddingBottom : "100px", backgroundColor:"bisque"}}>
        
        
        <Navbar/>
        {
            isloading? (
                <h1>data loading</h1>
            ) : filterdata && (
                <div>

                
                
                <Heading textAlign={"center"} margin={"100px 0px"}>More about {filterdata.title} </Heading>
                <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            maxW={{base : "200px", md : "600px"}}
            variant='outline'
            height={"400px"}
            boxShadow={"dark-lg"}
            margin={"auto"}
            bg={"#FBCEB1"}
  
            >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px',md : "300px" }}
            maxH={{base : "100%",sm : "200px", md : "300px"}}
            margin={"auto"}
            padding={"0px 40px"}
            src={filterdata.image}
            
            
        />

        <Stack>
            <CardBody>
            <Heading size='md'>{filterdata.title}</Heading>

            <Text py='2'>
                {filterdata.description}
            </Text>
            </CardBody>

            <CardFooter>
            
                {filterdata.ingredients && filterdata.ingredients.length > 0 ? (
                    <>
                    <Text>Ingredients.....</Text>
                        <UnorderedList >
                        {filterdata.ingredients.map((ele: any, index: number) => (
                            <ListItem key={index}>{ele}</ListItem>
                        ))}
                    </UnorderedList>
                    </>
                ) : (
                    <p>No ingredients available.</p>
                )}
            </CardFooter>
        </Stack>
            </Card>
            </div>
            )
        }
    </div>
    </>
    )
}

