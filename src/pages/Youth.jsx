import { asset } from '../lib/asset.js'
import ArrowIcon from '../components/ArrowIcon.jsx'

export default function Youth() {
  return (
    <main>
      <section className="hero hero--youth">
        <img src={asset('youth.webp')} alt="Jugador de la cantera de CD Respect" className="hero__image" width="1456" height="816" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="eyebrow eyebrow--light">Cantera</span>
          <h1>Cantera CD Respect</h1>
          <p className="hero__meta">El Fraile, Tenerife</p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner">
          <h2>Formación desde la base</h2>
          <p className="lead">
            La cantera de CD Respect reúne a los equipos base del club, desde alevín hasta
            juvenil. El trabajo diario se apoya en los mismos valores que dan nombre al club:
            respeto, esfuerzo y equipo.
          </p>
        </div>
      </section>

      <section className="section section--gallery">
        <div className="section__inner">
          <div className="gallery-grid">
            <div className="gallery-item gallery-item--tall">
              <img src={asset('youth.webp')} alt="Jugador de la cantera controlando el balón" loading="lazy" width="1456" height="816" />
            </div>
            <div className="gallery-item">
              <img src={asset('youth_2.webp')} alt="Jugador de la cantera en acción" loading="lazy" width="1456" height="816" />
            </div>
            <div className="gallery-item">
              <img src={asset('respect_1.webp')} alt="Equipo alevín de CD Respect, campeones de liga 2025-2026" loading="lazy" width="1260" height="948" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--instagram">
        <div className="section__inner section__inner--center">
          <span className="eyebrow eyebrow--light">Instagram</span>
          <h2>@cd_respect</h2>
          <p className="lead">
            Resultados, entrenamientos y actividad de los equipos de la cantera se publican
            en la cuenta oficial de Instagram del club.
          </p>
          <a
            className="btn btn--gold"
            href="https://www.instagram.com/cd_respect"
            target="_blank"
            rel="noreferrer"
          >
            <span>Seguir en Instagram</span>
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  )
}
