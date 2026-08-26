import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'
import NotFound from './pages/NotFound.jsx'
import './index.css'

const locale = window.location.pathname.startsWith('/en/') ? 'en' : 'es'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout locale={locale} page="home">
      <NotFound />
    </Layout>
  </React.StrictMode>,
)
