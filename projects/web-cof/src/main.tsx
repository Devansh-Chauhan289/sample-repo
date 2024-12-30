import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { AuthcontextProvider } from './redux/context.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import {ChakraProvider} from "@chakra-ui/react"
import {extendTheme} from "@chakra-ui/react"
import {BrowserRouter} from "react-router"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <ChakraProvider theme={theme} >
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
