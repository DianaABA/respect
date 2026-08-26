import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={close}>
          <img src="/logo.jpeg" alt="Escudo CD Respect" className="navbar__logo" />
          <span>CD Respect</span>
        </Link>

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
          <NavLink to="/#info" onClick={close}>Info</NavLink>
          <NavLink to="/#juvenil" onClick={close}>Juvenil</NavLink>
          <NavLink to="/#primer-equipo" onClick={close}>Adultos</NavLink>
          <NavLink to="/#academia" onClick={close}>Academia</NavLink>
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
