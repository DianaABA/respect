import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import CookieBanner from './CookieBanner.jsx'

export default function Layout({ locale, page, children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">{locale === 'ru' ? 'Перейти к содержимому' : locale === 'es' ? 'Ir al contenido' : 'Skip to main content'}</a>
      <Navbar locale={locale} page={page} />
      <div id="main-content" tabIndex="-1">{children}</div>
      <Footer locale={locale} />
      <CookieBanner locale={locale} />
    </>
  )
}
