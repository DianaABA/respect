import { translations } from '../content/translations.js'
import { PAGE_PATHS } from '../lib/i18n.js'

function detectLocale() {
  if (typeof window === 'undefined') return 'es'
  return window.location.pathname.startsWith('/en/') ? 'en' : 'es'
}

export default function NotFound() {
  const locale = detectLocale()
  const t = translations[locale].notFound

  return (
    <main>
      <section className="section section--dark section--offset-nav not-found">
        <div className="section__inner">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p className="lead">{t.body}</p>
          <a className="btn btn--gold" href={PAGE_PATHS.home[locale]}>
            {t.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
