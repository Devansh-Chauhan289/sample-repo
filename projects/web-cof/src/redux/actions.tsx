import axios from "axios"



// interface actiontype{
//     type : string,
//     payload? : any
// }

export let getdata  = ()=>{
    return async(dispatch : any)=>{
        dispatch({type : "FETCH-REQ"})
        try {
            let res = await axios.get("https://mock-ac43e-default-rtdb.firebaseio.com/coffee.json")
            let mydata = res.data
            console.log(mydata)
            dispatch({type : "FETCH-COM",payload : mydata})

        } catch (error) {
            dispatch({type : "FETCH-FAIL"})
            console.log("error",error);
        }
    }
}

export let sortdata = (order : string)=>{
    return{
        type : "SORT-DATA",
        payload : order
    }
}

export let searchdata = (text : string)=>{
    return{
        type : "SEARCH",
        payload : text
    }
}

export let loginuser = (ans : boolean)=>{
    return{
        type : "LOGIN",
        payload : ans
    }
}

export let registeruser = (email : string,password : string)=>{
    let userregister = {
        id : Math.random(),
        email,
        password
    }
    return async(dispatch : any)=>{
        dispatch({type : "POST-REQ"})
        try {
            await axios.post("https://eval-92b62-default-rtdb.firebaseio.com/users.json",userregister)
            dispatch({type : "POST-COM",payload : true})
        } catch (error) {
            dispatch({type:"POST-FAIL"})
        }
    }
    
}

export let getusers = ()=>{
    
    return async(dispatch : any) =>{
        dispatch({type : "GET-USER-REQ"})
        try {
            let res = await axios.get("https://eval-92b62-default-rtdb.firebaseio.com/users.json")
            let mydata = res.data
            console.log(mydata)
            dispatch({type : "GET-USER-COM",payload : mydata})
        } catch (error) {
            console.log(error,"error")
            dispatch({type : "GET-USER-FAIL"})
        }
    }
}

export let createcoffee = (obj : any) => {
    return async(dispatch : any) => {
        dispatch({type : "POST-COFFEE-REQ"})

        try {
            await axios.post("https://mock-ac43e-default-rtdb.firebaseio.com/coffee.json",obj)
            dispatch({type : "POST-COFFEE-COM",payload : true})
        } catch (error) {
            console.log(error,"error")
            dispatch({type : "POST-COFFEE-FAIL"})
        }
    }
}