import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/home'
import { UserSignIn } from './components/signup'
import { Route, Routes } from 'react-router'
import { Login } from './components/login'
import { Addtodo } from './components/todoadd'
import { DeleteTodo } from './components/delete'
import { UpdateTodo } from './components/update'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element=<Home/> />
      <Route path='/login' element=<Login/> />
      <Route path='Addtodo' element=<Addtodo/> />
      <Route path='/signup' element=<UserSignIn/> />
      <Route path='/delete/:id' element=<DeleteTodo/> />
      <Route path='/update/:id' element=<UpdateTodo/> />
    </Routes>
      
    </>
  )
}

export default App
