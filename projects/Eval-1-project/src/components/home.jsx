import { useState } from "react"
import {Routes,Route,Link} from "react-router-dom"

export let Home =()=>{
    let [total,settotal] = useState(120000)
    return(
        <>
        <nav>
            <Link className="hash" to={"expense"}>Expenses</Link>
            <Link className="hash" to={"/income"}>Income</Link>
            <Link className="hash" to={"/transaction"}>Transaction</Link>
            <Link className="hash" to={"/savings"}>Savings</Link>
        </nav>
        <h1 id="dash" >DASHBOARD</h1>
        <div id="body">
        <div className="card">
            <h2>Financial Summary</h2>
            <p>Total Income : {total}</p>
            <p>Total Expense : 60000</p>
            <p>Current Savings : 60000</p>
            <p><b>Savings Goal:15000000</b> </p>
        </div>
        <div className="card">
            <h2>Data Analytics</h2>
            <p>Expense Category : clothing</p>
            <p>Monthly Income : 100000 ----  Expense : 50000</p>
        </div>
        </div>
        
        </>
        
    )
}