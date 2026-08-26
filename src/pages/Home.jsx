export default function Home() {
  return (
    <main>
      <section className="hero">
        <video
          className="hero__video"
          src="/stadium.mp4"
          poster="/stadium.png"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <img src="/logo.jpeg" alt="Escudo CD Respect" className="hero__logo" />
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
              <p className="info-card__value">Dionisio González</p>
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
            <img src="/respect_1.jpeg" alt="Equipo alevín de CD Respect con la directiva, campeones de la Liga Alevín Preferente 2025-2026" />
          </div>
          <div className="split__text">
            <span className="eyebrow">Juvenil</span>
            <h2>Fútbol base</h2>
            <p>
              La cantera de CD Respect reúne a los equipos de fútbol base, de alevín a
              juvenil. En la temporada 2025-2026 el equipo alevín se proclamó campeón de
              la Liga Alevín Preferente, junto a la directiva y el cuerpo técnico del club.
            </p>
            <a className="btn btn--gold" href="/cantera">
              Ver cantera
            </a>
          </div>
        </div>
      </section>

      <section id="primer-equipo" className="section section--split section--split-reverse section--dark">
        <div className="section__inner section__inner--split">
          <div className="split__image">
            <img src="/stadium.png" alt="Estadio de CD Respect" />
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
        <div className="section__inner section__inner--split">
          <div className="split__image">
            <img src="/youth_2.png" alt="Jugador entrenando en la Academia Internacional de CD Respect" />
          </div>
          <div className="split__text">
            <span className="eyebrow eyebrow--light">Academia internacional</span>
            <h2>Academia internacional</h2>
            <p>
              CD Respect abre sus categorías a jugadores y familias internacionales
              instaladas en Tenerife, con un método de entrenamiento común a toda la
              estructura del club, de la cantera al primer equipo.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
