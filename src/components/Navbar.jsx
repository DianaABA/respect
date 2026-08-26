import { useEffect, useState } from 'react'
import { asset } from '../lib/asset.js'

const home = import.meta.env.BASE_URL

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          <a href={`${home}#info`} onClick={close}>Info</a>
          <a href={`${home}#juvenil`} onClick={close}>Juvenil</a>
          <a href={`${home}#primer-equipo`} onClick={close}>Adultos</a>
          <a href={`${home}#academia`} onClick={close}>Academia</a>
          <a href={`${home}cantera/`} onClick={close}>Cantera</a>
          <a
            href="https://www.instagram.com/cd_respect"
            target="_blank"
            rel="noreferrer"
            className="navbar__ig"
            onClick={close}
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  )
}
