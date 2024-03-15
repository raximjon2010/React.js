import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './root/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// BrowserRouter => biz buni react-router-dom ni ishlatish uchun import qilib olib kelishimiz kk va uni eng katta bolgan 
// main components ga orab quyamiz