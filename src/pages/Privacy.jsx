import { translations } from '../content/translations.js'

export default function Privacy({ locale }) {
  const t = translations[locale].privacy

  return (
    <main>
      <section className="section section--dark section--offset-nav">
        <div className="section__inner">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <h2>{t.h1}</h2>
          <p>{t.p1}</p>

          <h2>{t.h2}</h2>
          <p>{t.p2}</p>

          <h2>{t.h3}</h2>
          <p>{t.p3}</p>

          <h2>{t.h4}</h2>
          <p>{t.p4}</p>
        </div>
      </section>
    </main>
  )
}
