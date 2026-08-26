import RussianHome from './RussianHome.jsx'
import WesternHome from './WesternHome.jsx'

export default function Home({ locale }) {
  return locale === 'ru' ? <RussianHome /> : <WesternHome locale={locale} />
}
