import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './root/App.jsx'
import Context from './context/list/list.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <App />
    </Context>
  </React.StrictMode>,
)
