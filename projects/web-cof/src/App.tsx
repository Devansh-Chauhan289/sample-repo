
import './App.css'
import { Home } from './components/home'
import { Route,Routes } from 'react-router'
import { Login } from './components/login'
import { Register } from './components/register'
import { CoffeeDetails } from './components/details'
import { Timer } from './components/timer'
import { Create } from './components/create'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element = <Home/> />
      <Route path='/login' element = <Login/> />
      <Route path='/register' element = <Register/> />
      <Route path='/details/:id' element=<CoffeeDetails/> />
      <Route path='/timer' element=<Timer/> />
      <Route path='/create' element=<Create/> />
    </Routes>
     
    </>
  )
}

export default App
