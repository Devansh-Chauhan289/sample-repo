import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/home'
import { Route, Routes } from 'react-router-dom'
import { Income } from './components/income'
import { Expenses } from './components/expenses'
import { Transaction } from './components/transaction'
import { Savings } from './components/savings'

function App() {

  return (<>
  <Routes>
  <Route path='/' element = <Home/>  />
  <Route path='/income' element=<Income/> />
  <Route path='/expense' element=<Expenses/> />
  <Route path='/transaction' element=<Transaction/> />
  <Route path='/savings' element=<Savings/> />
  </Routes>
   
  </>
   
  )
}

export default App
