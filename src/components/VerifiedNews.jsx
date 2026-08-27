import { asset } from '../lib/asset.js'

export default function VerifiedNews({ locale = 'es' }) {
  const label = {
    en: ['CD Respect news and club membership', 'Open full-size news image'],
    es: ['Actualidad y socios de CD Respect', 'Ampliar imagen de noticias'],
    ru: ['Новости и членство в CD Respect', 'Увеличить изображение с новостями']
  }[locale]

  return <section className="section verified-news" id="news"><div className="section__inner"><a className="news-poster" href={asset('news.png')} target="_blank" rel="noreferrer" aria-label={label[1]}><img src={asset('news.png')} alt={label[0]} loading="eager"/><span aria-hidden="true">⛶</span><strong>{label[1]}</strong></a></div></section>
}
