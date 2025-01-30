import express from "express"
import mongoose, { mongo } from "mongoose"
import { TodoRouter } from "./routes/todo.route.js"
import cors from "cors"

let app = express()
let PORT = 3011


app.use(cors())

app.use(express.json())
app.use("/todos",TodoRouter)



app.listen(PORT,async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/")
        console.log("DB connected");
        console.log("Server Is Live")
    } catch (error) {
        console.log("Something went wrong");    
    }
})