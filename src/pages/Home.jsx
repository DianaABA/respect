import { useEffect, useRef } from 'react'
import { asset } from '../lib/asset.js'
import ArrowIcon from '../components/ArrowIcon.jsx'

export default function Home() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      video.pause()
      video.removeAttribute('autoplay')
      return
    }

    video.muted = true
    const attemptPlay = () => video.play().catch(() => {})
    attemptPlay()

    const onInteract = () => {
      if (video.paused) attemptPlay()
      window.removeEventListener('pointerdown', onInteract)
      window.removeEventListener('touchstart', onInteract)
    }
    window.addEventListener('pointerdown', onInteract, { once: true })
    window.addEventListener('touchstart', onInteract, { once: true })

    return () => {
      window.removeEventListener('pointerdown', onInteract)
      window.removeEventListener('touchstart', onInteract)
    }
  }, [])

  return (
    <main>
      <section className="hero">
        <video
          ref={videoRef}
          className="hero__video"
          poster={asset('stadium.webp')}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={asset('stadium_optimized.mp4')} type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__content">
          <img src={asset('logo.jpeg')} alt="Escudo CD Respect" className="hero__logo" width="1260" height="1253" />
          <h1>CD Respect</h1>
          <p className="hero__sub">Club Deportivo Respect</p>
          <p className="hero__meta">Fundado en 2024 &middot; El Fraile, Tenerife</p>
        </div>
      </section>

      <section id="info" className="section section--dark">
        <div className="section__inner">
          <span className="eyebrow">Info</span>
          <h2>Club Deportivo Respect</h2>
          <p className="lead">
            CD Respect se fundó en 2024 en El Fraile, Tenerife, sobre un principio: respeto
            al rival, al árbitro, al compañero y a la camiseta. Ese principio ordena el
            trabajo de todas las categorías del club, desde la cantera hasta el primer equipo.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <p className="info-card__label">Fundación</p>
              <p className="info-card__value">2024</p>
            </div>
            <div className="info-card">
              <p className="info-card__label">Ubicación</p>
              <p className="info-card__value">El Fraile, Tenerife</p>
            </div>
            <div className="info-card">
              <p className="info-card__label">Dirección</p>
              <a
                className="info-card__value info-card__link"
                href="https://www.google.com/maps/search/?api=1&query=Dionisio+Gonzalez+El+Fraile+Tenerife"
                target="_blank"
                rel="noreferrer"
              >
                Dionisio González
              </a>
            </div>
            <div className="info-card">
              <p className="info-card__label">Cuenta oficial</p>
              <a
                className="info-card__value info-card__link"
                href="https://www.instagram.com/cd_respect"
                target="_blank"
                rel="noreferrer"
              >
                @cd_respect
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="juvenil" className="section section--split">
        <div className="section__inner section__inner--split">
          <div className="split__image">
            <img
              src={asset('respect_1.webp')}
              alt="Equipo alevín de CD Respect con la directiva, campeones de la Liga Alevín Preferente 2025-2026"
              loading="lazy"
              width="1260"
              height="948"
            />
          </div>
          <div className="split__text">
            <span className="eyebrow">Juvenil</span>
            <h2>Fútbol base</h2>
            <p>
              La cantera de CD Respect reúne a los equipos de fútbol base, de alevín a
              juvenil. En la temporada 2025-2026 el equipo alevín se proclamó campeón de
              la Liga Alevín Preferente, junto a la directiva y el cuerpo técnico del club.
            </p>
            <a className="btn btn--gold" href={`${import.meta.env.BASE_URL}cantera/`}>
              <span>Ver cantera</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="primer-equipo" className="section section--split section--split-reverse section--dark">
        <div className="section__inner section__inner--split">
          <div className="split__image">
            <img src={asset('stadium.webp')} alt="Estadio de CD Respect" loading="lazy" width="1456" height="816" />
          </div>
          <div className="split__text">
            <span className="eyebrow">Primer equipo</span>
            <h2>Adultos</h2>
            <p>
              El primer equipo representa a CD Respect en las categorías de adultos,
              compitiendo bajo los mismos principios que rigen la cantera: respeto,
              esfuerzo y trabajo colectivo por encima del individual.
            </p>
          </div>
        </div>
      </section>

      <section id="academia" className="section section--wave">
        <img src={asset('stadium_waves.webp')} alt="" aria-hidden="true" className="section__bg" loading="lazy" />
        <div className="section__inner section__inner--split">
          <div className="split__image">
            <img
              src={asset('youth_2.webp')}
              alt="Jugador entrenando en la Academia Internacional de CD Respect"
              loading="lazy"
              width="1456"
              height="816"
            />
          </div>
          <div className="split__text">
            <span className="eyebrow eyebrow--light">Academia internacional</span>
            <h2>Academia internacional</h2>
            <p>
              CD Respect abre sus categorías a jugadores y familias internacionales
              instaladas en Tenerife, con un método de entrenamiento común a toda la
              estructura del club, de la cantera al primer equipo.
            </p>
            <p lang="en" className="split__translation">
              CD Respect welcomes players and international families based in Tenerife,
              with one training method shared across every team, from the youth academy
              to the first team.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
