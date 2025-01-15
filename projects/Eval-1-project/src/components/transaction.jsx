import { useEffect, useState } from "react"
import axios from "axios"

export let Transaction=()=>{
    let [arr,setarr] = useState([])
    useEffect(()=>{
        axios.get("https://eval-92b62-default-rtdb.firebaseio.com/.json")
        .then(res=>setarr(Object.entries(res.data)))
        
    },[])

    async function handledel(e){
        
        await axios.delete(`https://eval-92b62-default-rtdb.firebaseio.com/${e}.json`)
    }
    return(
        <>
            <select id="sort">
                <option value="">Income/Exepense</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <select id="filter">
                <option value="">filter by</option>
                <option value="category">Category</option>
                <option value="date">Date</option>

            </select>
            
            <div id="exbody">
                {
                    arr.map((ele)=>(
                        <div className="card">
                            <h2>{ele[1].amount}</h2>
                            <h3>{ele[1].desc}</h3>
                            <p>{ele[1].date}</p>
                            <button onClick={()=>handledel(ele[1].id)} >Delete</button>
                        </div>
                        
                        // console.log(ele[1].amount);
                    ))
                }
            </div>
        </>
    )
}