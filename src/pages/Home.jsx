import { useEffect, useRef } from 'react'
import { asset } from '../lib/asset.js'
import { PAGE_PATHS } from '../lib/i18n.js'
import { translations } from '../content/translations.js'
import ArrowIcon from '../components/ArrowIcon.jsx'

export default function Home({ locale }) {
  const videoRef = useRef(null)
  const t = translations[locale].home

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      video.pause()
      video.removeAttribute('autoplay')
      return
    }

    let cancelled = false
    video.muted = true

    const attemptPlay = () => {
      const playPromise = video.play()
      if (playPromise) playPromise.catch(() => {})
    }

    attemptPlay()

    // Retry on every signal that could mean the first attempt didn't take:
    // more data became available, a user gesture happened, the tab came
    // back into focus, or the browser paused it for some other reason.
    const onRetry = () => {
      if (!cancelled && video.paused) attemptPlay()
    }
    const onVisibility = () => {
      if (document.visibilityState === 'visible') onRetry()
    }

    video.addEventListener('canplay', onRetry)
    video.addEventListener('loadeddata', onRetry)
    video.addEventListener('pause', onRetry)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pointerdown', onRetry)
    window.addEventListener('touchstart', onRetry)

    const retryTimers = [300, 1000, 3000].map((delay) => setTimeout(onRetry, delay))

    return () => {
      cancelled = true
      video.removeEventListener('canplay', onRetry)
      video.removeEventListener('loadeddata', onRetry)
      video.removeEventListener('pause', onRetry)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointerdown', onRetry)
      window.removeEventListener('touchstart', onRetry)
      retryTimers.forEach(clearTimeout)
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
          <p className="hero__sub">{t.heroSub}</p>
        </div>
      </section>

      <section id="info" className="section section--dark">
        <div className="section__inner">
          <span className="eyebrow">{t.info.eyebrow}</span>
          <h2>{t.info.title}</h2>
          <p className="lead">{t.info.lead}</p>
          <div className="info-grid">
            <div className="info-card">
              <p className="info-card__label">{t.info.fundacion}</p>
              <p className="info-card__value">2024</p>
            </div>
            <div className="info-card">
              <p className="info-card__label">{t.info.ubicacion}</p>
              <p className="info-card__value">El Fraile, Tenerife</p>
            </div>
            <div className="info-card">
              <p className="info-card__label">{t.info.direccion}</p>
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
              <p className="info-card__label">{t.info.telefono}</p>
              <a className="info-card__value info-card__link" href="tel:+34677711454">
                +34 677 71 14 54
              </a>
            </div>
            <div className="info-card">
              <p className="info-card__label">{t.info.email}</p>
              <a className="info-card__value info-card__link" href="mailto:cdrespect.es@gmail.com">
                cdrespect.es@gmail.com
              </a>
            </div>
            <div className="info-card">
              <p className="info-card__label">{t.info.cuentaOficial}</p>
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
            <img src={asset('respect_1.webp')} alt={t.juvenil.imgAlt} loading="lazy" width="1260" height="948" />
          </div>
          <div className="split__text">
            <span className="eyebrow">{t.juvenil.eyebrow}</span>
            <h2>{t.juvenil.title}</h2>
            <p>{t.juvenil.body}</p>
            <a className="btn btn--gold" href={PAGE_PATHS.youth[locale]}>
              <span>{t.juvenil.cta}</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="primer-equipo" className="section section--split section--split-reverse section--dark">
        <div className="section__inner section__inner--split">
          <div className="split__image">
            <img src={asset('stadium.webp')} alt={t.adultos.imgAlt} loading="lazy" width="1456" height="816" />
          </div>
          <div className="split__text">
            <span className="eyebrow">{t.adultos.eyebrow}</span>
            <h2>{t.adultos.title}</h2>
            <p>{t.adultos.body}</p>
          </div>
        </div>
      </section>

      <section id="academia" className="section section--wave">
        <img src={asset('stadium_waves.webp')} alt="" aria-hidden="true" className="section__bg" loading="lazy" />
        <div className="section__inner section__inner--split">
          <div className="split__image">
            <img src={asset('youth_2.webp')} alt={t.academia.imgAlt} loading="lazy" width="1456" height="816" />
          </div>
          <div className="split__text">
            <span className="eyebrow eyebrow--light">{t.academia.eyebrow}</span>
            <h2>{t.academia.title}</h2>
            <p>{t.academia.body}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
