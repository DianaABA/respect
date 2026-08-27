import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout locale="es" page="about">
      <About locale="es" />
    </Layout>
  </React.StrictMode>,
)
