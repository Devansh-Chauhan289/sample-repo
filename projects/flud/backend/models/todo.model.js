import mongoose, { model, Schema } from "mongoose";

let todoSchema = new Schema({
    title : String,
    status : {type : Boolean,default : false}
})

let todoModel = model("todos",todoSchema)

export{todoModel}