import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   
    <BrowserRouter> 
    <AuthProvider>
    <App />  </AuthProvider>
    </BrowserRouter>
  
  </React.StrictMode>
)
