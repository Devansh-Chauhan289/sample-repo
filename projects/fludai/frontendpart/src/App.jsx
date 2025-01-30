import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  UserSignIn } from './components/signup'
import { Route, Router, Routes } from 'react-router'
import { Signup } from '../../controllers/todo.controller'
import { Login } from './components/login'
import { Addtodo } from './components/todoadd'
import { Home } from './components/home'

function App() {
  

  return (
    <>
      <Home/>

    </>
  )
}

export default App
