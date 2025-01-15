import { useState } from "react"

export let Savings=()=>{
    let [save,setsave] = useState("")
    let [progress,setprog] = useState(57)
    function handlesave(){
        setprog(0)
        return(
            <h1>{save}</h1>
        )
    }
    return(
        <>
            <input type="text" placeholder="Enter Saving Target" value={save} onChange={(e)=>setsave(e.target.value)} />
            <button onClick={handlesave}>Set Save</button>
            
            <h2> PROGRESS : {progress}%</h2>
            <h3>Good Work Keep It Up!!! Your Goal Isn't Far</h3>
        </>
    )
}