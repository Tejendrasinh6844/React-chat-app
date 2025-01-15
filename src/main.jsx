import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
    <HelmetProvider>
    <CssBaseline />
    <App />
    </HelmetProvider>
 
)
