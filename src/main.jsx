import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'        // <- Make sure this imports YOUR App.jsx
import './index.css'           // or './App.css', whichever you want

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
