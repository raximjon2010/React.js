import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './root/App.jsx'
import StudentProvider from './context/Sudent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudentProvider>
    <App />
    </StudentProvider>
  </React.StrictMode>,
)
