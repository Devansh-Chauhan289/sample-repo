import mongoose, { model, Schema } from "mongoose";

let UserSchema = new Schema({
    email : String,
    password : String,
    access : {type : String,default : ""}
})

let userModel = model("users",UserSchema)

export{userModel}