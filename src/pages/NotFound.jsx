export default function NotFound() {
  return (
    <main>
      <section className="section section--dark section--offset-nav not-found">
        <div className="section__inner">
          <span className="eyebrow">404</span>
          <h1>Página no encontrada</h1>
          <p className="lead">Esta dirección no existe o se ha movido.</p>
          <a className="btn btn--gold" href={import.meta.env.BASE_URL}>
            Volver al inicio
          </a>
        </div>
      </section>
    </main>
  )
}
