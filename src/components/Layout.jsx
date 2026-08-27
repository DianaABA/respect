import { useLayoutEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import CookieBanner from './CookieBanner.jsx'
import Sponsors from './Sponsors.jsx'

export default function Layout({ locale, page, children }) {
  useLayoutEffect(() => {
    const root = document.getElementById('main-content')
    if (!root) return undefined

    const items = [...root.querySelectorAll([
      '.brief-title',
      '.programme-copy',
      '.programme-image',
      '.academy-editorial-image',
      '.training-stories > article',
      '.programme-stories > article',
      '.opportunity-stories > article',
      '.achievement-columns > article',
      '.membership-grid > article',
      '.facility-cards > article',
      '.merch-grid > article',
      '.career-roles > a',
    ].join(','))]

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    items.forEach((item, index) => {
      item.classList.add('reveal-item')
      item.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`)
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' })

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [locale, page])

  return (
    <>
      <a className="skip-link" href="#main-content">{locale === 'ru' ? 'Перейти к содержимому' : locale === 'es' ? 'Ir al contenido' : 'Skip to main content'}</a>
      <Navbar locale={locale} page={page} />
      <div id="main-content" tabIndex="-1">{children}</div>
      {page === 'home' && <Sponsors locale={locale} />}
      <Footer locale={locale} />
      <CookieBanner locale={locale} />
    </>
  )
}
