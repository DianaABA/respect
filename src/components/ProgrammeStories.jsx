import { asset } from '../lib/asset.js'

export function ProgrammeStories({ items, locale = 'en' }) {
  const images = [
    'sga_tenerife_01.jpg',
    'sga_tenerife_02.png',
    'sga_tenerife_03.png',
  ]
  const language = /[А-Яа-яЁё]/.test(items.join(' ')) ? 'ru' : /^alojamiento/i.test(items[0]) ? 'es' : locale
  const alt = language === 'ru' ? 'Steven Gerrard Academy Tenerife' : language === 'es' ? 'Steven Gerrard Academy Tenerife, La Caleta' : 'Steven Gerrard Academy Tenerife at La Caleta'
  const link = language === 'ru' ? 'Официальный сайт Steven Gerrard Academy Tenerife' : language === 'es' ? 'Web oficial de Steven Gerrard Academy Tenerife' : 'Official Steven Gerrard Academy Tenerife website'
  return <><div className="programme-stories programme-stories--official">{images.map((image, i) => <article key={image}><figure><a href="https://www.stevengerrardacademy.com/tenerife" target="_blank" rel="noreferrer"><img src={asset(image)} alt={`${alt} · ${i + 1}`} loading="lazy" decoding="async"/></a><figcaption>Steven Gerrard Academy</figcaption></figure><div>{items.slice(i * 3, i * 3 + 3).map(item => <p key={item}>{item.replace(/;\s*$/, '')}</p>)}</div></article>)}</div><a className="official-academy-link" href="https://www.stevengerrardacademy.com/tenerife" target="_blank" rel="noreferrer">{link} <span aria-hidden="true">↗</span></a></>
}

export function OpportunityStories({ items }) {
  const groups = [items.slice(0, 3), items.slice(3)]
  const images = ['respect_tenerife.png', 'youth_2.webp']
  return <div className="opportunity-stories">{groups.map((group, i) => <article key={i}><figure><img src={asset(images[i])} alt="" loading="lazy"/></figure><div>{group.map(item => <p key={item}>{item.replace(/;\s*$/, '')}</p>)}</div></article>)}</div>
}
