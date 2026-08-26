import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><Layout locale="ru" page="home"><Home locale="ru" /></Layout></React.StrictMode>)
