import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cd-respect-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

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
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p className="cookie-banner__text">
        Este sitio no utiliza cookies de seguimiento. La elección de este aviso se guarda
        localmente en tu navegador. Más información en la{' '}
        <a href={`${import.meta.env.BASE_URL}privacidad/`}>política de privacidad y cookies</a>.
      </p>
      <div className="cookie-banner__actions">
        <button type="button" className="cookie-banner__btn cookie-banner__btn--ghost" onClick={() => choose('rejected')}>
          Rechazar
        </button>
        <button type="button" className="cookie-banner__btn cookie-banner__btn--gold" onClick={() => choose('accepted')}>
          Aceptar
        </button>
      </div>
    </div>
  )
}
