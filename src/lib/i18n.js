const base = import.meta.env.BASE_URL

export const PAGE_PATHS = {
  home: { es: base, en: `${base}en/`, ru: `${base}ru/` },
  youth: { es: `${base}cantera/`, en: `${base}en/youth/`, ru: `${base}ru/youth/` },
  privacy: { es: `${base}privacidad/`, en: `${base}en/privacy/`, ru: `${base}ru/privacy/` },
  about: { es: `${base}about/`, en: `${base}en/about/`, ru: `${base}ru/about/` },
}

export const LOCALES = ['es', 'en', 'ru']
