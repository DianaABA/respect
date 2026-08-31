import { asset } from '../lib/asset.js'

const stories = [
  {
    date: '06.06.2026', image: 'adult_team.jpeg',
    title: { en: 'CD Respect launches its Senior Team', es: 'CD Respect lanza su equipo sénior', ru: 'CD Respect запускает взрослую команду' },
    text: { en: 'A young, ambitious team will represent the club in Tenerife’s Segunda División Regional in 2026/27.', es: 'Un equipo joven y ambicioso representará al club en la Segunda División Regional de Tenerife en 2026/27.', ru: 'Молодая и амбициозная команда представит клуб в Segunda División Regional Тенерифе в сезоне 2026/27.' },
    url: 'https://eldeportivo.es/futbol/mas/202606/tres-equipos-de-el-fraile-competiran-en-categoria-regional/'
  },
  {
    date: '29.05.2026', image: 'academy_achivments.jpeg',
    title: { en: 'Respect defeats Barranco Hondo 7–2', es: 'Respect vence 7–2 al Barranco Hondo', ru: 'Respect побеждает Barranco Hondo со счётом 7:2' },
    text: { en: 'A commanding Torneo de Campeones victory at Dionisio González in Arona.', es: 'Una victoria contundente en el Torneo de Campeones disputado en el Dionisio González de Arona.', ru: 'Убедительная победа в Torneo de Campeones на стадионе Dionisio González в Ароне.' },
    url: 'https://www.ftf.es/pnfg/NFG_CmpPartido?CodActa=242123&cod_primaria=1000120'
  },
  {
    date: '14.06.2026', image: 'our_journey.jpeg',
    title: { en: 'Respect B reaches the Cup semi-final', es: 'Respect B alcanza la semifinal de Copa', ru: 'Respect B выходит в полуфинал Кубка' },
    text: { en: 'The Alevín side completed a strong Copa Alevín Primera Sur campaign.', es: 'El equipo Alevín completó una destacada participación en la Copa Alevín Primera Sur.', ru: 'Команда Alevín успешно выступила в Copa Alevín Primera Sur.' },
    url: 'https://www.ftf.es/pnfg/NPcd/NFG_VisCompeticiones_Grupo?cod_primaria=1000123&codequipo=903047460&codgrupo=903512951'
  },
  {
    date: '03.04.2026', image: 'team_listening.webp',
    title: { en: 'Strong showing at the Madrid Star ESEI Cup', es: 'Gran actuación en la Madrid Star ESEI Cup', ru: 'Успешное выступление на Madrid Star ESEI Cup' },
    text: { en: 'CD Respect finished second in Group C with two wins and 15 goals scored.', es: 'CD Respect terminó segundo en el Grupo C con dos victorias y 15 goles marcados.', ru: 'CD Respect занял второе место в группе C, одержав две победы и забив 15 голов.' },
    url: 'https://eseievents.com/torneo/madrid-star-esei-cup-2026-2/alevin/'
  }
]

export default function VerifiedNews({ locale = 'es' }) {
  const copy = {
    en: ['LATEST NEWS', 'News from CD Respect', 'VERIFIED SOURCE', 'Read verified source'],
    es: ['ÚLTIMAS NOTICIAS', 'Actualidad de CD Respect', 'FUENTE VERIFICADA', 'Leer fuente verificada'],
    ru: ['ПОСЛЕДНИЕ НОВОСТИ', 'Новости CD Respect', 'ПРОВЕРЕННЫЙ ИСТОЧНИК', 'Открыть источник']
  }[locale]
  return <section className="section verified-news" id="news"><div className="section__inner"><div className="brief-title"><span className="eyebrow">{copy[0]}</span><h2>{copy[1]}</h2></div><div className="news-grid verified-news__grid">{stories.map((story, i) => <article className={`news-card ${i === 0 ? 'news-card--featured' : ''}`} key={story.url}><div className="news-card__image"><img src={asset(story.image)} alt="" loading="lazy" /></div><div className="news-card__body"><span>{story.date} · {copy[2]}</span><h3>{story.title[locale]}</h3><p>{story.text[locale]}</p><a href={story.url} target="_blank" rel="noreferrer" aria-label={`${story.title[locale]} — ${copy[3]}`}><span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
}
