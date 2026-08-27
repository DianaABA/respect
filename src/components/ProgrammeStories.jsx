import { asset } from '../lib/asset.js'

export function ProgrammeStories({ items }) {
  const images = ['team_walking_tenerife.png', 'young_athlete_computer_wondow.png', 'methods.png']
  return <div className="programme-stories">{images.map((image, i) => <article key={image}><figure><img src={asset(image)} alt="" loading="lazy"/><span>{String(i + 1).padStart(2, '0')}</span></figure><div>{items.slice(i * 3, i * 3 + 3).map(item => <p key={item}>{item.replace(/;\s*$/, '')}</p>)}</div></article>)}</div>
}

export function OpportunityStories({ items }) {
  const groups = [items.slice(0, 3), items.slice(3)]
  return <div className="opportunity-stories">{groups.map((group, i) => <article key={i}><figure><img src={asset(i ? 'youth_2.webp' : 'respect_tenerife.png')} alt="" loading="lazy"/><span>{String(i + 1).padStart(2, '0')}</span></figure><div>{group.map(item => <p key={item}>{item.replace(/;\s*$/, '')}</p>)}</div></article>)}</div>
}
