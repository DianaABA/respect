const titles = {
  en: ['OFFICIAL SPONSORS', 'Supporting CD Respect'],
  es: ['PATROCINADORES OFICIALES', 'Apoyando a CD Respect'],
  ru: ['ОФИЦИАЛЬНЫЕ СПОНСОРЫ', 'Поддерживают CD Respect'],
}

const sponsors = [
  {
    mark: 'ARONA',
    logo: 'sponsor_arona.webp',
    name: 'Ayuntamiento de Arona',
    meta: 'Apoyo institucional',
    href: 'https://www.arona.org/',
  },
  {
    mark: 'KK',
    logo: 'sponsor_kingkong.webp',
    badge: true,
    name: 'King Kong Grill',
    meta: 'Arona · Tenerife',
    href: 'https://www.thefork.es/restaurante/king-kong-grill-r856068',
  },
  {
    mark: 'R',
    logo: 'sponsor_rouz.webp',
    name: 'ROUZ España',
    meta: 'Real Estate · Investment',
    href: 'https://www.rouz.es/',
  },
]

export default function Sponsors({ locale = 'en' }) {
  const [kicker, title] = titles[locale] || titles.en
  return <section className="sponsors-showcase" id="sponsors" aria-labelledby="sponsors-title">
    <div className="section__inner">
      <div className="brief-title"><span className="eyebrow">{kicker}</span><h2 id="sponsors-title">{title}</h2></div>
      <div className="sponsors-showcase__grid">
        {sponsors.map((sponsor) => <a key={sponsor.name} href={sponsor.href} target="_blank" rel="noreferrer">
          <span className={`sponsors-showcase__mark${sponsor.logo ? (sponsor.badge ? ' sponsors-showcase__mark--badge' : ' sponsors-showcase__mark--logo') : ''}`} aria-hidden="true">
            {sponsor.logo ? <img src={`/${sponsor.logo}`} alt="" loading="lazy" /> : sponsor.mark}
          </span>
          <span><strong>{sponsor.name}</strong><small>{sponsor.meta}</small></span>
          <span aria-hidden="true">↗</span>
        </a>)}
      </div>
    </div>
  </section>
}
