const titles = {
  en: ['OFFICIAL SPONSORS', 'Supporting CD Respect'],
  es: ['PATROCINADORES OFICIALES', 'Apoyando a CD Respect'],
  ru: ['ОФИЦИАЛЬНЫЕ СПОНСОРЫ', 'Поддерживают CD Respect'],
}

const sponsors = [
  {
    mark: 'KK',
    name: 'King Kong Grill',
    meta: 'Arona · Tenerife',
    href: 'https://www.thefork.es/restaurante/king-kong-grill-r856068',
  },
  {
    mark: 'R',
    name: 'ROUZ España',
    meta: 'Real Estate · Investment',
    href: 'https://es.linkedin.com/posts/rouz-tenerife-ba0643305_conocerouz-fiscalidad-nudapropiedad-activity-7371093387971563520-7vDH',
  },
]

export default function Sponsors({ locale = 'en' }) {
  const [kicker, title] = titles[locale] || titles.en
  return <section className="sponsors-showcase" id="sponsors" aria-labelledby="sponsors-title">
    <div className="section__inner">
      <div className="brief-title"><span className="eyebrow">{kicker}</span><h2 id="sponsors-title">{title}</h2></div>
      <div className="sponsors-showcase__grid">
        {sponsors.map((sponsor) => <a key={sponsor.name} href={sponsor.href} target="_blank" rel="noreferrer">
          <span className="sponsors-showcase__mark" aria-hidden="true">{sponsor.mark}</span>
          <span><strong>{sponsor.name}</strong><small>{sponsor.meta}</small></span>
          <span aria-hidden="true">↗</span>
        </a>)}
      </div>
    </div>
  </section>
}
