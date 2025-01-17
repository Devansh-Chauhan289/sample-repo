import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export let Timer = () => {
    let [count, setCount] = useState<number>(0);
    let [min,setmin] = useState<number>(48)
    let [hour,sethour] = useState<number>(11)
    



    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => prev + 1); 
        }, 1000);

        
        return () => clearInterval(intervalId);
    }, []);

    useEffect(()=>{
        if(count>=60){
            setmin(prev => prev + 1)
            setCount(0)
        }
        else if(min>=60){
            sethour(prev => prev+1)
            setmin(0)
        }
        else if(hour >= 12){
            sethour(0)
            setmin(0)
            setCount(0)
        }
    },[count])

    let formathour = String(hour).padStart(2,"0")
    let formatmin = String(min).padStart(2,"0")
    let formatcount = String(count).padStart(2,"0")

    return (
        <>
        <Heading textAlign={
            "center"
        }><h1>{formathour}:{formatmin}:{formatcount} </h1></Heading>
            
        </>
    );
};
