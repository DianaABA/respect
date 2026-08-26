const base = import.meta.env.BASE_URL

export const PAGE_PATHS = {
  home: { es: base, en: `${base}en/` },
  youth: { es: `${base}cantera/`, en: `${base}en/youth/` },
  privacy: { es: `${base}privacidad/`, en: `${base}en/privacy/` },
}

export function otherLocale(locale) {
  return locale === 'es' ? 'en' : 'es'
}
