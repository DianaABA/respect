import { useEffect, useState } from 'react'
import { asset } from '../lib/asset.js'
import { LOCALES, PAGE_PATHS } from '../lib/i18n.js'
import { translations } from '../content/translations.js'

export default function Navbar({ locale, page }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = translations[locale].nav
  const home = PAGE_PATHS.home[locale]
  const labels = locale === 'ru'
    ? ['Взрослая команда', 'Академия', 'Международная академия', 'Матчи', 'Новости', 'Socios', 'Партнёры', 'Merch', 'Карьера', 'Базы', 'Контакты']
    : locale === 'es'
      ? ['Equipo Sénior', 'Academia Base', 'Academia Internacional', 'Partidos', 'Noticias', 'Socios', 'Socios comerciales', 'Merch', 'Empleo', 'Instalaciones', 'Contacto']
      : ['Senior Team', 'Academy Base', 'International Academy', 'Matches', 'News', 'Socios', 'Partners', 'Merch', 'Careers', 'Facilities', 'Contact']

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.classList.toggle('menu-open', open)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('menu-open')
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href={home} className="navbar__brand" onClick={close}>
          <img src={asset('logo.jpeg')} alt="Escudo CD Respect" className="navbar__logo" />
          <span>CD Respect</span>
        </a>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label={t.openMenu}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="primary-navigation" aria-label="Primary navigation" className={`navbar__links ${open ? 'is-open' : ''}`}>
          <a href={`${home}#senior`} onClick={close}>{labels[0]}</a>
          <a href={`${home}#academy`} onClick={close}>{labels[1]}</a>
          <a href={`${home}#international`} onClick={close}>{labels[2]}</a>
          <a href={`${home}#matches`} onClick={close}>{labels[3]}</a>
          <a href={`${home}#news`} onClick={close}>{labels[4]}</a>
          <a href={`${home}#socios`} onClick={close}>{labels[5]}</a>
          <a href={`${home}#partners`} onClick={close}>{labels[6]}</a>
          <a href={`${home}#merch`} onClick={close}>{labels[7]}</a>
          <a href={`${home}#careers`} onClick={close}>{labels[8]}</a>
          <a href={`${home}#facilities`} onClick={close}>{labels[9]}</a>
          <a href={`${home}#contact`} onClick={close}>{labels[10]}</a>
          <div className="navbar__languages" aria-label="Language selector">
            {LOCALES.map((code) => (
              <a key={code} href={PAGE_PATHS[page][code]} className={`navbar__lang ${locale === code ? 'is-active' : ''}`} onClick={close} hrefLang={code} lang={code} aria-current={locale === code ? 'page' : undefined}>{code.toUpperCase()}</a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
