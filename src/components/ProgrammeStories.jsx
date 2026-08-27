import { asset } from '../lib/asset.js'

export function ProgrammeStories({ items, locale = 'en' }) {
  const images = [
    'https://cdn.prod.website-files.com/673b4618f9499b188c6db961/67d154013df3a852487270c2_Tenerife-Homepage-Website.jpg',
    'https://cdn.prod.website-files.com/673b4618f9499b188c6db961/67cace5f11f118840121617f_Untitled%20design%20-%202025-03-07T104533.609.png',
    'https://cdn.prod.website-files.com/673b4618f9499b188c6db961/67d2f979492ed8dfd9c31853_Untitled%20design%20-%202025-03-13T152743.675.png',
  ]
  const language = /[А-Яа-яЁё]/.test(items.join(' ')) ? 'ru' : /^alojamiento/i.test(items[0]) ? 'es' : locale
  const alt = language === 'ru' ? 'Steven Gerrard Academy Tenerife' : language === 'es' ? 'Steven Gerrard Academy Tenerife, La Caleta' : 'Steven Gerrard Academy Tenerife at La Caleta'
  const link = language === 'ru' ? 'Официальный сайт Steven Gerrard Academy Tenerife' : language === 'es' ? 'Web oficial de Steven Gerrard Academy Tenerife' : 'Official Steven Gerrard Academy Tenerife website'
  return <><div className="programme-stories programme-stories--official">{images.map((image, i) => <article key={image}><figure><a href="https://www.stevengerrardacademy.com/tenerife" target="_blank" rel="noreferrer"><img src={image} alt={`${alt} · ${i + 1}`} loading="lazy" referrerPolicy="no-referrer"/></a><span>{String(i + 1).padStart(2, '0')}</span><figcaption>Steven Gerrard Academy</figcaption></figure><div>{items.slice(i * 3, i * 3 + 3).map(item => <p key={item}>{item.replace(/;\s*$/, '')}</p>)}</div></article>)}</div><a className="official-academy-link" href="https://www.stevengerrardacademy.com/tenerife" target="_blank" rel="noreferrer">{link} <span aria-hidden="true">↗</span></a></>
}

export function OpportunityStories({ items }) {
  const groups = [items.slice(0, 3), items.slice(3)]
  return <div className="opportunity-stories">{groups.map((group, i) => <article key={i}><figure><img src={asset(i ? 'youth_2.webp' : 'respect_tenerife.png')} alt="" loading="lazy"/><span>{String(i + 1).padStart(2, '0')}</span></figure><div>{group.map(item => <p key={item}>{item.replace(/;\s*$/, '')}</p>)}</div></article>)}</div>
}
