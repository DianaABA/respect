import { asset } from '../lib/asset.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={asset('logo.jpeg')} alt="Escudo CD Respect" className="footer__logo" />
          <div>
            <p className="footer__name">CD Respect</p>
            <p className="footer__tagline">Club Deportivo Respect. Fundado en 2024.</p>
          </div>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Ubicación</p>
          <p>Dionisio González</p>
          <p>El Fraile, Tenerife</p>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Contacto</p>
          <a href="https://www.instagram.com/cd_respect" target="_blank" rel="noreferrer">
            Instagram: @cd_respect
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>CD Respect, El Fraile, Tenerife</span>
        <a href={`${import.meta.env.BASE_URL}privacidad/`}>Privacidad y cookies</a>
      </div>
    </footer>
  )
}
