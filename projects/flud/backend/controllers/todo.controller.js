import { todoModel } from "../models/todo.model.js"
import bcrypt from "bcrypt"
let saltrounds = 10
import jwt from "jsonwebtoken"
import { userModel } from "../models/user.model.js"



let CreateTodo = async(req,res) => {
    try {
        let {title} = req.body

        await todoModel.create(req.body)
        res.status(201).json({msg : "Todo Added successfully"})
    } catch (error) {
        console.log("Error Occured");
        res.status(500).send("Internal Error Occurred")
    }
}

let GetTodo = async(req,res) => {
    try {
        let todos = await todoModel.find()
        res.status(200).send(todos)
    } catch (error) {
        console.log("Error Occured");
        res.status(500).send("Internal Error Occurred")
    }
}


let GetOneTodo = async(req,res) => {
    try {
        let {id} = req.params
        let todo = await todoModel.findOne({_id : id})
        if(!todo){
            return res.status(404).send("No Todo Found")
        }
        res.status(200).send(todo)
    } catch (error) {
        console.log("Error Occured");
        res.status(500).send("Internal Error Occurred")
    }
}

let UpdateTodo = async(req,res) => {
    try {
        let {id} = req.params

         await todoModel.findByIdAndUpdate(id,req.body)
        res.status(201).json({msg : "Todo Updated success"})
    } catch (error) {
        console.log("Error Occured");
        res.status(500).json({msg : "error "})
    }
}


let DeleteTodo = async(req,res) => {
    try {
        let {id} = req.params
        await todoModel.findByIdAndDelete(id)
        res.status(200).send("Todo Deleted")
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Error Occurred")
    }
}

let Signup = async(req,res) => {
    try {
        let {email,password} = req.body
        if(!email || !password){
            return res.status(400).send("Invalid Request")
        }
        bcrypt.hash(password,saltrounds,async function(err,result){
            if(err){
                return res.status(400).send("Invalid Request")
            } else{
                let userdata = {...req.body,password : result}
                await userModel.create(userdata)
                res.status(201).json({msg : "Sign In SUccess"})
            } 
        })
    } catch (error) {
        console.log("Error Occured");
        res.status(500).send("Internal Error Occurred")
    }
}


let Login = async(req,res) => {
    try {
        let {email,password} = req.body
        if(!email || !password){
            return res.status(400).send("Invalid Request")
        }
        let user = await userModel.findOne({email : email})
        if(!user){
            return res.status(404).json({msg : "No user Found"})
        }
        let mypass = user.password
        bcrypt.compare(password,mypass, async function(err,result){
            if(err){
                return res.status(400).send("Invalid Password")
            } if(result){
                let access = jwt.sign({userID : user._id},"sshhh",{expiresIn : "6h"})
                await userModel.updateOne({email : user.email},{$set : {access : access}})
                res.status(201).json({msg : "User Logged in",access})
            } else{
                res.status(400).send("Wrong password")
            }
        })
    } catch (error) {
        console.log("Error Occured");
        res.status(500).send("Internal Error Occurred")
    }
}


export{CreateTodo,GetTodo,GetOneTodo,DeleteTodo,UpdateTodo,Signup,Login}