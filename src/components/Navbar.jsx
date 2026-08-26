import { useEffect, useState } from 'react'
import { asset } from '../lib/asset.js'
import { PAGE_PATHS, otherLocale } from '../lib/i18n.js'
import { translations } from '../content/translations.js'

export default function Navbar({ locale, page }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = translations[locale].nav
  const home = PAGE_PATHS.home[locale]
  const other = otherLocale(locale)
  const switchHref = PAGE_PATHS[page][other]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          <a href={`${home}#info`} onClick={close}>{t.info}</a>
          <a href={`${home}#juvenil`} onClick={close}>{t.juvenil}</a>
          <a href={`${home}#primer-equipo`} onClick={close}>{t.adultos}</a>
          <a href={`${home}#academia`} onClick={close}>{t.academia}</a>
          <a href={PAGE_PATHS.youth[locale]} onClick={close}>{t.cantera}</a>
          <a
            href="https://www.instagram.com/cd_respect"
            target="_blank"
            rel="noreferrer"
            className="navbar__ig"
            onClick={close}
          >
            {t.instagram}
          </a>
          <a href={switchHref} className="navbar__lang" onClick={close} hrefLang={other}>
            {t.switchLabel}
          </a>
        </nav>
      </div>
    </header>
  )
}
