import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollContextProvider from './context/Scroll.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ScrollContextProvider>
    <ThemeContextProvider>
     <App />
     </ThemeContextProvider>
   </ScrollContextProvider>
  </StrictMode>,
)
