import { asset } from '../lib/asset.js'
import { PAGE_PATHS } from '../lib/i18n.js'

const Arrow = () => <span aria-hidden="true">↗</span>
const BulletList = ({ items }) => <ul className="brief-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>

const methodology = ['понимание игры;', 'принятие решений;', 'создание пространства;', 'использование пространства;', 'техническое мастерство;', 'тактическое мышление;', 'развитие личности игрока.']
const philosophy = ['развитие собственных игроков;', 'современный атакующий футбол;', 'единая игровая модель клуба;', 'долгосрочное развитие;', 'формирование сильной футбольной идентичности;', 'развитие футбольного интеллекта;', 'смелый и осмысленный футбол;', 'создание и использование пространства;', 'воспитание игроков, способных принимать решения на высоком уровне.']

function SectionTitle({ kicker, title }) {
  const image = title === 'Наша философия'
    ? ['team_listening.png', 'Игроки Respect внимательно слушают установку перед игрой', 'Наша философия · Единая команда']
    : null
  return <><div className="brief-title"><span className="eyebrow">{kicker}</span><h2>{title}</h2></div>{image && <figure className="academy-editorial-image"><img src={asset(image[0])} alt={image[1]} loading="lazy" /><figcaption>{image[2]}</figcaption></figure>}</>
}

export default function RussianAbout() {
  const home = PAGE_PATHS.home.ru
  return <main className="client-brief">
    <section className="section section--offset-nav">
      <div className="section__inner">
        <span className="eyebrow">О ПРОЕКТЕ</span>
        <h1>Наша миссия, философия и видение</h1>
        <p className="hero-project__intro">Идея, стоящая за Respect Football Project: почему мы существуем, как мы работаем и куда хотим привести клуб.</p>
        <a className="btn btn--outline" href={home}>← Вернуться на главную</a>
      </div>
    </section>
    <section className="section section--cream" id="about"><div className="section__inner brief-two-col"><div><SectionTitle kicker="О ПРОЕКТЕ" title="Respect Football Project основан в 2023 году на острове Тенерифе, Испания." /><p className="large-copy">Наша миссия — создать полноценную систему подготовки футболистов, объединяющую обучение, развитие, соревновательный опыт и реальные карьерные возможности.</p><p>Мы убеждены, что современный футбол требует не только техники и физических качеств.</p><h3 className="gold-statement">Главное качество футболиста — футбольный интеллект.</h3></div><div className="brief-panel"><p>Поэтому в основе нашей методологии лежат:</p><BulletList items={methodology} /></div></div><div className="section__inner full-quote">Мы строим не команды на один сезон. Мы строим игроков на всю карьеру.</div></section>
    <section className="section philosophy-section"><div className="section__inner"><SectionTitle kicker="SENIOR TEAM" title="Наша философия" /><div className="principle-grid">{philosophy.map((item, i) => <div key={item}><span>0{i + 1}</span><p>{item}</p></div>)}</div><div className="brief-manifesto"><h3>Мы убеждены, что футбол начинается не с физических качеств, а с понимания игры.</h3><p>Поэтому мы стремимся развивать игроков, которые умеют думать, анализировать, принимать решения и управлять игрой на поле.</p></div></div></section>
    <section className="section section--cream"><div className="section__inner brief-two-col"><div><SectionTitle kicker="SENIOR TEAM" title="Наши цели" /><p className="large-copy">Respect Senior Team создаётся как долгосрочный спортивный проект с большими амбициями.</p><p>Наша задача — не просто участвовать в соревнованиях, а построить клуб, способный конкурировать на национальном уровне и стать значимой частью испанского футбола.</p></div><div className="brief-panel brief-panel--light"><p>Мы стремимся:</p><BulletList items={['развивать собственных воспитанников и создавать основу команды из игроков системы Respect;', 'последовательно подниматься по испанской футбольной пирамиде;', 'выйти на национальный уровень соревнований;', 'создать профессиональную структуру клуба;', 'стать одним из наиболее узнаваемых футбольных проектов Канарских островов;', 'предоставить нашим игрокам возможность выступать на максимально высоком уровне;', 'создать клуб, который будет гордостью Тенерифе и примером устойчивого футбольного развития.']} /></div></div></section>
    <section className="editorial vision"><img src={asset('respect_1.webp')} alt="Команда Respect Football Project" loading="lazy" /><div className="editorial__shade" /><div className="editorial__copy"><span className="eyebrow">Наше видение</span><h2>Мы верим, что большие достижения начинаются с больших целей.</h2><p>Сегодня мы строим фундамент. Завтра мы хотим видеть Respect среди сильных клубов Испании.</p><p>Каждый большой клуб когда-то начинался с одного поля, одной команды и группы людей, которые верили в свою идею.</p><p>Respect строится с долгосрочным видением и без ограничений в масштабе мечты.</p><p>Мы хотим создать клуб, который будет расти вместе со своими игроками, своими болельщиками и своим сообществом.</p><p>Наша мечта — однажды вывести Respect на уровень профессионального футбола, играть против лучших команд страны и представлять Тенерифе на крупнейших футбольных аренах Испании и Европы.</p></div></section>
    <section className="section about-return"><div className="section__inner"><a className="btn btn--gold" href={home}>Вернуться на главную <Arrow /></a></div></section>
  </main>
}
