import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'
import Privacy from './pages/Privacy.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><Layout locale="ru" page="privacy"><Privacy locale="ru" /></Layout></React.StrictMode>)
