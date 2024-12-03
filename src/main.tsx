import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')!).render(
  
  <GoogleOAuthProvider clientId='64442170894-ne8a7qpaind2vm8de1shm6phnfjrkolu.apps.googleusercontent.com'>
    <StrictMode>
    <App />
  </StrictMode>
  </GoogleOAuthProvider>
  
)
