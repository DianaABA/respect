import { asset } from '../lib/asset.js'
import { PAGE_PATHS } from '../lib/i18n.js'
import { translations } from '../content/translations.js'

export default function Footer({ locale }) {
  const t = translations[locale].footer

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={asset('logo.jpeg')} alt="Escudo CD Respect" className="footer__logo" />
          <div>
            <p className="footer__name">CD Respect</p>
            <p className="footer__tagline">{t.tagline}</p>
          </div>
        </div>

        <div className="footer__col">
          <p className="footer__heading">{t.ubicacion}</p>
          <p>Dionisio González</p>
          <p>El Fraile, Tenerife</p>
        </div>

        <div className="footer__col">
          <p className="footer__heading">{t.contacto}</p>
          <a href="tel:+34677711454">+34 677 71 14 54</a>
          <a href="mailto:cdrespect.es@gmail.com">cdrespect.es@gmail.com</a>
          <a href="https://www.instagram.com/cd_respect" target="_blank" rel="noreferrer">
            Instagram: @cd_respect
          </a>
          <a href="https://www.facebook.com/cdrespect/" target="_blank" rel="noreferrer">
            Facebook: CD Respect
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>{t.bottomLine}</span>
        <a href={PAGE_PATHS.privacy[locale]}>{t.privacyLink}</a>
      </div>
    </footer>
  )
}
