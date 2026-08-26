import { asset } from '../lib/asset.js'

export default function Youth() {
  return (
    <main>
      <section className="hero hero--youth">
        <img src={asset('youth.png')} alt="Jugador de la cantera de CD Respect" className="hero__image" />
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
              <img src={asset('youth.png')} alt="Jugador de la cantera controlando el balón" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src={asset('youth_2.png')} alt="Jugador de la cantera en acción" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src={asset('respect_1.jpeg')} alt="Equipo alevín de CD Respect, campeones de liga 2025-2026" loading="lazy" />
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
            Seguir en Instagram
          </a>
        </div>
      </section>
    </main>
  )
}
