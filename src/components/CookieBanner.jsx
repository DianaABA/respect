import { useEffect, useState } from 'react'
import { PAGE_PATHS } from '../lib/i18n.js'
import { translations } from '../content/translations.js'

const STORAGE_KEY = 'cd-respect-cookie-consent'

export default function CookieBanner({ locale }) {
  const [visible, setVisible] = useState(false)
  const t = translations[locale].cookie

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const choose = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // localStorage unavailable, dismiss anyway
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label={t.ariaLabel}>
      <p className="cookie-banner__text">
        {t.text}{' '}
        <a href={PAGE_PATHS.privacy[locale]}>{t.linkText}</a>.
      </p>
      <div className="cookie-banner__actions">
        <button type="button" className="cookie-banner__btn cookie-banner__btn--ghost" onClick={() => choose('rejected')}>
          {t.reject}
        </button>
        <button type="button" className="cookie-banner__btn cookie-banner__btn--gold" onClick={() => choose('accepted')}>
          {t.accept}
        </button>
      </div>
    </div>
  )
}
