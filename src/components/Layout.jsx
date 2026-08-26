import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import CookieBanner from './CookieBanner.jsx'

export default function Layout({ locale, page, children }) {
  return (
    <>
      <Navbar locale={locale} page={page} />
      {children}
      <Footer locale={locale} />
      <CookieBanner locale={locale} />
    </>
  )
}
