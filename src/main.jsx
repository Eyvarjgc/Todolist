import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'



import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;




createRoot(document.getElementById('root')).render(

  <GoogleOAuthProvider clientId={clientId}>
    <BrowserRouter>
  <StrictMode>

    <App  />

    
  </StrictMode>,
  </BrowserRouter>
  </GoogleOAuthProvider>

)
