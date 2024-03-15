import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './root/App.jsx'
import StudentProvider from './context/Sudent.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudentProvider>
      <BrowserRouter>
    <App />
      </BrowserRouter>
    </StudentProvider>
  </React.StrictMode>,
)
