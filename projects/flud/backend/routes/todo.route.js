import express from "express"
import { CreateTodo, DeleteTodo, GetOneTodo, GetTodo, Login, Signup, UpdateTodo } from "../controllers/todo.controller.js"
import { AuthMw } from "../middlewares/auth.mw.js"

let TodoRouter = express.Router()

TodoRouter.post("/create",CreateTodo)
TodoRouter.get("/get",GetTodo)
TodoRouter.get("/get/:id",GetOneTodo)
TodoRouter.put("/update/:id",UpdateTodo)
TodoRouter.delete("/delete/:id",DeleteTodo)
TodoRouter.post("/signup",Signup)
TodoRouter.post("/login",Login)

export {TodoRouter}