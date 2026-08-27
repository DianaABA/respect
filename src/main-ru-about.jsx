import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'
import RussianAbout from './pages/RussianAbout.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout locale="ru" page="about">
      <RussianAbout />
    </Layout>
  </React.StrictMode>,
)
