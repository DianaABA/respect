import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'
import Privacy from './pages/Privacy.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout locale="en" page="privacy">
      <Privacy locale="en" />
    </Layout>
  </React.StrictMode>,
)
