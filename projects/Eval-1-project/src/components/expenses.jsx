import { useEffect, useState } from "react";
import axios from "axios"

export let Expenses = ()=>{
    let [arr,setarr] = useState([])
    let [amount,setamount] = useState("")
    let [desc,setdesc] = useState("")
    let [date,setdate] = useState("")
    

    async function handlesubmit(){
        event.preventDefault()
        let obj = {
            amount,
            desc,
            date
        }
        await axios.post("https://eval-92b62-default-rtdb.firebaseio.com/.json",obj)

        setamount("")
        setdate("")
        setdesc("")
    
    }

    
    
    useEffect(()=>{
        axios.get("https://eval-92b62-default-rtdb.firebaseio.com/.json")
        .then(res=>setarr(Object.entries(res.data)))
        
    },[])
    

    return(
        <>
        <h1>Add Expenses</h1>
        <form>
            <input type="text" name="amount" placeholder="amount" value={amount} onChange={(e)=>setamount(e.target.value)} />
            <input type="text" placeholder="description" value={desc} onChange={(e)=>setdesc(e.target.value)} />
            <input type="date" placeholder="date" value={date} onChange={(e)=>setdate(e.target.value)}/>
            <button onClick={handlesubmit}>Submit</button>
        </form>
        <div id="exbody">
                {
                    arr.map((ele)=>(
                        <div className="card">
                            <h2>{ele[1].amount}</h2>
                            <h3>{ele[1].desc}</h3>
                            <p>{ele[1].date}</p>
                        </div>
                        
                        // console.log(ele[1].amount);
                    ))
                }
            </div>
        </>
    )
}