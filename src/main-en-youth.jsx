import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'
import Youth from './pages/Youth.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout locale="en" page="youth">
      <Youth locale="en" />
    </Layout>
  </React.StrictMode>,
)
