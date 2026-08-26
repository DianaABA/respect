import { asset } from '../lib/asset.js'
import { translations } from '../content/translations.js'
import ArrowIcon from '../components/ArrowIcon.jsx'

export default function Youth({ locale }) {
  const t = translations[locale].youth

  return (
    <main>
      <section className="hero hero--youth">
        <img src={asset('youth.webp')} alt={t.heroAlt} className="hero__image" width="1456" height="816" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="eyebrow eyebrow--light">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p className="hero__meta">{t.location}</p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner">
          <h2>{t.sectionTitle}</h2>
          <p className="lead">{t.sectionBody}</p>
        </div>
      </section>

      <section className="section section--gallery">
        <div className="section__inner">
          <div className="gallery-grid">
            <div className="gallery-item gallery-item--tall">
              <img src={asset('youth.webp')} alt={t.galleryAlt1} loading="lazy" width="1456" height="816" />
            </div>
            <div className="gallery-item">
              <img src={asset('youth_2.webp')} alt={t.galleryAlt2} loading="lazy" width="1456" height="816" />
            </div>
            <div className="gallery-item">
              <img src={asset('respect_1.webp')} alt={t.galleryAlt3} loading="lazy" width="1260" height="948" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--instagram">
        <div className="section__inner section__inner--center">
          <span className="eyebrow eyebrow--light">{t.igEyebrow}</span>
          <h2>@cd_respect</h2>
          <p className="lead">{t.igBody}</p>
          <a
            className="btn btn--gold"
            href="https://www.instagram.com/cd_respect"
            target="_blank"
            rel="noreferrer"
          >
            <span>{t.igCta}</span>
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  )
}
