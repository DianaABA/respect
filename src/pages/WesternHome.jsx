import { useEffect, useRef } from "react";
import { asset } from "../lib/asset.js";
import {
  OpportunityStories,
  ProgrammeStories,
} from "../components/ProgrammeStories.jsx";
import YouTubeShowcase from "../components/YouTubeShowcase.jsx";
import Sponsors from "../components/Sponsors.jsx";
import VerifiedNews from "../components/VerifiedNews.jsx";

const Arrow = () => <span aria-hidden="true">↗</span>;
const List = ({ items }) => (
  <ul className="brief-list">
    {items.map((x) => (
      <li key={x}>{x.replace(/;\s*$/, "")}</li>
    ))}
  </ul>
);
const Title = ({ over, title }) => {
  const journey = ["Our pathway", "Nuestro camino"].includes(title);
  const achievements = ["OUR ACHIEVEMENTS", "NUESTROS LOGROS"].includes(title);
  const methods = ["Our methodology", "Nuestra metodología"].includes(title);
  const image = journey
    ? [
        "our_journey.jpeg",
        title === "Nuestro camino"
          ? "Jugadores jóvenes de Respect Academy con el trofeo y la bandera del club"
          : "Young Respect Academy players with the trophy and club flag",
        `${title} · Respect Academy Base`,
      ]
    : achievements
      ? [
          "academy_achivments.jpeg",
          title === "NUESTROS LOGROS"
            ? "Jugadores de Respect Academy celebrando con el trofeo"
            : "Respect Academy players celebrating with the trophy",
          `${title} · Respect Academy Base`,
        ]
      : methods
        ? [
            "real_training.jpeg",
            title === "Nuestra metodología"
              ? "Jugador de Respect aplicando la metodología de inteligencia futbolística en una situación de juego"
              : "Respect player applying the football-intelligence methodology in a match situation",
            `${title} · Football Intelligence`,
          ]
        : null;
  return (
    <>
      <div className="brief-title">
        <span className="eyebrow">{over}</span>
        <h2>{title}</h2>
      </div>
      {image && (
        <figure className={`academy-editorial-image${methods ? " academy-methodology-image" : ""}`}>
          <img src={asset(image[0])} alt={image[1]} loading="lazy" />
          <figcaption>{image[2]}</figcaption>
        </figure>
      )}
    </>
  );
};

export default function WesternHome({ locale }) {
  const es = locale === "es",
    tx = (en, spanish) => (es ? spanish : en),
    videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video && !matchMedia("(prefers-reduced-motion: reduce)").matches)
      video.play().catch(() => {});
  }, []);
  return (
    <main className="client-brief">
      <section className="hero hero--project" id="home">
        <video
          ref={videoRef}
          className="hero__video"
          poster={asset("adult_team.jpeg")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={asset("stadium_optimized.mp4")} type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero-project__content">
          <p className="hero-project__kicker">
            Tenerife, {tx("Spain", "España")}
          </p>
          <h1 className="brand-line">CD RESPECT</h1>
          <p className="hero-project__intro">
            {tx(
              "Respect Football Project is a modern football ecosystem in Tenerife, bringing together a youth academy, a senior team and an international player development programme.",
              "Respect Football Project es un ecosistema futbolístico moderno en Tenerife que une una academia base, un equipo sénior y un programa internacional de desarrollo de jugadores.",
            )}
          </p>
          <p className="hero-project__intro">
            {tx(
              "We create an environment where talent has the opportunity to become a professional career.",
              "Creamos un entorno en el que el talento tiene la oportunidad de convertirse en una carrera profesional.",
            )}
          </p>
          <p className="hero-project__slogan">
            {tx(
              "Develop. Compete. Progress.",
              "Desarrollamos. Competimos. Progresamos.",
            )}
          </p>
        </div>
      </section>
      <section className="brief-intro">
        <div className="section__inner">
          <p>
            {tx(
              "This is more than a football school.",
              "Esto no es solo una escuela de fútbol.",
            )}
          </p>
          <h2>
            {tx(
              "It is a complete player development system, from the first steps in football to senior football, international education and professional opportunities.",
              "Es un sistema completo de desarrollo del jugador: desde los primeros pasos hasta el fútbol sénior, la educación internacional y las oportunidades profesionales.",
            )}
          </h2>
        </div>
      </section>
      <Senior tx={tx} />
      <Academy tx={tx} />
      <International tx={tx} />
      <Match tx={tx} />
      <Community tx={tx} locale={locale} />
      <MerchCareers tx={tx} />
      <Values tx={tx} />
      <Contact tx={tx} />
      <section className="final-cta">
        <img src={asset("stadium_waves.webp")} alt="" />
        <div className="final-cta__shade" />
        <div className="final-cta__content">
          <img src={asset("logo.jpeg")} alt="Respect Football Project crest" />
          <h2>
            {tx(
              "Respect Football Project is a complete football development system combining a youth academy, international player development programme and senior team.",
              "Respect Football Project es un sistema completo de desarrollo de futbolistas que une una academia base, un programa internacional de preparación y un equipo sénior.",
            )}
          </h2>
          <p>
            {tx(
              "We create an environment in which talent has the opportunity to become a professional career, gain a quality education and discover new opportunities both in football and beyond.",
              "Creamos un entorno en el que el talento tiene la oportunidad de convertirse en una carrera profesional, recibir una educación de calidad y descubrir nuevas oportunidades tanto dentro como fuera del fútbol.",
            )}
          </p>
        </div>
      </section>
    </main>
  );
}

function Senior({ tx }) {
  return (
    <section className="section senior-intro" id="senior">
      <div className="section__inner programme-grid">
        <div className="programme-copy">
          <span className="eyebrow">{tx("SENIOR TEAM", "EQUIPO SÉNIOR")}</span>
          <h2>{tx("Senior Team", "Equipo sénior")}</h2>
          <p>
            {tx(
              "Respect Senior Team was created in 2026 as the final stage of player development within the club structure.",
              "Respect Senior Team fue creado en 2026 como etapa final del desarrollo dentro de la estructura del club.",
            )}
          </p>
          <p>
            {tx(
              "The team is the natural continuation of the academy pathway, giving the best academy players an opportunity to continue developing in senior football.",
              "El equipo es la continuación natural de la academia y permite a sus mejores jugadores seguir desarrollándose en el fútbol sénior.",
            )}
          </p>
          <p>
            {tx(
              "We are not building a team only for today’s results. Our goal is a club with its own identity, long-term vision and sustainable player development system.",
              "No construimos un equipo solo para los resultados de hoy. Nuestro objetivo es un club con identidad propia, visión a largo plazo y un sistema sostenible de desarrollo.",
            )}
          </p>
        </div>
        <div className="programme-image">
          <img
            src={asset("adult_team.jpeg")}
            alt="Respect Senior Team"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Match({ tx }) {
  return (
    <section className="section match-centre" id="matches">
      <div className="section__inner">
        <Title
          over="MATCH CENTRE"
          title={tx(
            "Official fixtures and results",
            "Calendario y resultados oficiales",
          )}
        />
        <div className="match-grid">
          <article className="match-card match-card--empty">
            <div className="card-label">
              {tx("Senior Team · 2026/27", "Equipo sénior · 2026/27")}
            </div>
            <strong className="score">
              {tx("Schedule pending", "Calendario pendiente")}
            </strong>
            <p>
              {tx(
                "CD Respect is provisionally registered for Tenerife’s Segunda División Regional. Fixtures will appear here after the federation confirms the final group and calendar.",
                "CD Respect está inscrito provisionalmente en la Segunda División Regional de Tenerife. Los partidos aparecerán aquí cuando la federación confirme el grupo y el calendario definitivos.",
              )}
            </p>
          </article>
          <article className="match-card">
            <div className="card-label">
              {tx(
                "Verified Academy result",
                "Resultado verificado de la Academia",
              )}
            </div>
            <strong className="score">3 — 6</strong>
            <p>
              <b>CD Respect · CD Tenerife</b>
              <br />
              {tx(
                "12 June 2026 · Champions Tournament Alevín Preferente · Dionisio González, Arona",
                "12 de junio de 2026 · Torneo de Campeones Alevín Preferente · Dionisio González, Arona",
              )}
            </p>
            <a
              className="match-source"
              href="https://www.ftf.es/pnfg/NFG_CmpPartido?CodActa=242130&cod_primaria=1000120"
              target="_blank"
              rel="noreferrer"
            >
              {tx("Official match record", "Acta oficial")} <Arrow />
            </a>
          </article>
          <article className="match-card">
            <div className="card-label">
              {tx("Academy · Cup run", "Academia · Copa")}
            </div>
            <strong className="score">
              {tx("Semi-finalists", "Semifinalistas")}
            </strong>
            <p>
              {tx(
                "Respect B reached the 2025/26 Copa Alevín Primera Sur semi-finals.",
                "Respect B alcanzó las semifinales de la Copa Alevín Primera Sur 2025/26.",
              )}
            </p>
            <a
              className="match-source"
              href="https://www.ftf.es/pnfg/NPcd/NFG_VisCompeticiones_Grupo?cod_primaria=1000123&codequipo=903047460&codgrupo=903512951"
              target="_blank"
              rel="noreferrer"
            >
              {tx(
                "Official competition record",
                "Ficha oficial de competición",
              )}{" "}
              <Arrow />
            </a>
          </article>
        </div>
        <a
          className="btn btn--gold"
          href="https://www.ftf.es/pnfg/NPcd/NFG_LstCompeticiones_Vis?cod_primaria=1000123"
          target="_blank"
          rel="noreferrer"
        >
          {tx(
            "Check live calendar and results",
            "Consultar calendario y resultados en directo",
          )}{" "}
          <Arrow />
        </a>
      </div>
    </section>
  );
}

function Academy({ tx }) {
  const training = tx(
    [
      "up to 5 training sessions per week;",
      "licensed coaches;",
      "official Football Federation competitions;",
      "individual player development;",
      "friendly matches against strong academies;",
      "continuous player monitoring.",
    ],
    [
      "hasta 5 entrenamientos semanales;",
      "entrenadores titulados;",
      "competiciones oficiales federadas;",
      "desarrollo individual;",
      "amistosos contra academias fuertes;",
      "seguimiento continuo.",
    ],
  );
  return (
    <>
      <section className="section programmes programmes--dark" id="academy">
        <div className="section__inner programme-grid">
          <div className="programme-copy">
            <span className="eyebrow">{tx("ACADEMY BASE", "ACADEMIA BASE")}</span>
            <h2>{tx("Youth football academy", "Academia de fútbol base")}</h2>
            <p>
              {tx(
                "Respect Academy Base is the fastest-growing football project on Tenerife by number of teams and players.",
                "Respect Academy Base es el proyecto de mayor crecimiento de Tenerife por número de equipos y jugadores.",
              )}
            </p>
            <p>
              {tx(
                "It began with one Alevín team and grew into a complete academy covering almost every age category.",
                "Comenzó con un equipo Alevín y creció hasta convertirse en una academia con casi todas las categorías.",
              )}
            </p>
          </div>
          <div className="programme-image">
            <img
              src={asset("real_5.jpeg")}
              alt="Respect Academy Base"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="section academy-path">
        <div className="section__inner">
          <Title
            over={tx("ACADEMY BASE", "ACADEMIA BASE")}
            title={tx("Our pathway", "Nuestro camino")}
          />
          <div className="season-grid">
            <Season
              title={tx(
                "First season · 2023/24",
                "Primera temporada · 2023/24",
              )}
              items={["1 Alevín"]}
            />
            <Season
              title={tx(
                "Second season · 2024/25",
                "Segunda temporada · 2024/25",
              )}
              items={["1 Debutantes", "2 Alevín", "1 Infantil"]}
            />
            <Season
              title="2026/27"
              items={[
                "Debutantes",
                "Prebenjamín",
                "Benjamín",
                "2 Alevín",
                "2 Infantil",
                "Cadete",
                "Juvenil",
              ]}
            />
          </div>
          <p className="path-conclusion">
            {tx(
              "Today the academy provides a complete pathway from first steps to senior football.",
              "Hoy la academia ofrece un camino completo desde los primeros pasos hasta el fútbol sénior.",
            )}
          </p>
        </div>
      </section>
      <section className="section academy-methodology">
        <div className="section__inner brief-two-col">
          <div>
            <Title
              over={tx("ACADEMY BASE", "ACADEMIA BASE")}
              title={tx("Our methodology", "Nuestra metodología")}
            />
            <p>
              {tx(
                "Our central focus is football intelligence. We teach players to:",
                "Nuestro foco central es la inteligencia futbolística. Enseñamos a los jugadores a:",
              )}
            </p>
            <List
              items={tx(
                [
                  "understand the game;",
                  "read situations;",
                  "decide under pressure;",
                  "create and use space;",
                  "solve problems independently;",
                  "think faster than the opponent.",
                ],
                [
                  "comprender el juego;",
                  "leer situaciones;",
                  "decidir bajo presión;",
                  "crear y utilizar espacios;",
                  "resolver problemas de forma autónoma;",
                  "pensar más rápido que el rival.",
                ],
              )}
            />
          </div>
          <div className="brief-panel">
            <h3>
              {tx(
                "We develop intelligent footballers, not simply fast or strong players.",
                "Desarrollamos futbolistas inteligentes, no simplemente jugadores rápidos o fuertes.",
              )}
            </h3>
          </div>
        </div>
      </section>
      <section className="section challenge">
        <div className="section__inner">
          <Title
            over={tx("ACADEMY BASE", "ACADEMIA BASE")}
            title={tx(
              "Development through challenge",
              "Desarrollo a través del desafío",
            )}
          />
          <p className="large-copy">
            {tx(
              "Advanced players regularly train and compete with older age groups.",
              "Los jugadores avanzados entrenan y compiten regularmente con categorías superiores.",
            )}
          </p>
          <blockquote>
            {tx(
              "Real progress begins where the comfort zone ends.",
              "El verdadero progreso comienza donde termina la zona de confort.",
            )}
          </blockquote>
        </div>
      </section>
      <Features
        title={tx("Training process", "Proceso de entrenamiento")}
        items={training}
        tx={tx}
      />
      <section className="section camps">
        <div className="section__inner brief-two-col">
          <div>
            <Title
              over={tx("ACADEMY BASE", "ACADEMIA BASE")}
              title={tx(
                "Professional summer camps",
                "Campus profesionales de verano",
              )}
            />
            <p className="large-copy">
              {tx(
                "Every summer the academy runs professional football camps based on the methods used by professional academies.",
                "Cada verano la academia organiza campus de fútbol profesionales basados en las metodologías de las academias profesionales.",
              )}
            </p>
          </div>
          <div className="brief-panel">
            <p>{tx("The programme includes:", "El programa incluye:")}</p>
            <List
              items={tx(
                [
                  "two training sessions per day;",
                  "technical training;",
                  "tactical sessions;",
                  "physical conditioning;",
                  "analysis of match situations;",
                  "work within a professional football environment.",
                ],
                [
                  "dos entrenamientos diarios;",
                  "preparación técnica;",
                  "sesiones tácticas;",
                  "preparación física;",
                  "análisis de situaciones de juego;",
                  "trabajo en un entorno futbolístico profesional.",
                ],
              )}
            />
          </div>
        </div>
      </section>
      <Achievements tx={tx} />
    </>
  );
}
function Season({ title, items }) {
  return (
    <article>
      <span>{title}</span>
      <List items={items} />
    </article>
  );
}
function Features({ title, items, tx }) {
  const images = ["real_training.jpeg", "real_2.jpeg", "real_3.jpeg"];
  return (
    <section className="section training-process">
      <div className="section__inner">
        <Title over={tx("ACADEMY BASE", "ACADEMIA BASE")} title={title} />
        <div className="training-stories">
          {images.map((image, i) => (
            <article key={image}>
              <figure>
                <img src={asset(image)} alt="" loading="lazy" />
              </figure>
              <div>
                {items.slice(i * 2, i * 2 + 2).map((x) => (
                  <p key={x}>{x.replace(/;\s*$/, "")}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Achievements({ tx }) {
  const cards = tx(
    [
      [
        "2024/25 · Alevín",
        [
          "4th place in Preferente Alevín;",
          "Cup runner-up (2nd place);",
          "Lanzarote Cup participant;",
          "International tournament participant (name to be confirmed).",
        ],
      ],
      ["Individual achievements", ["Golden Boot;", "Tournament MVP."]],
      [
        "Player development",
        [
          "1 player earned the opportunity to continue his career at CD Tenerife;",
          "1 player called up to the South Canary Islands Selection.",
        ],
      ],
      [
        "2025/26 · Debutantes",
        ["South Tenerife championship runners-up;", "Debutantes Cup winners."],
      ],
      [
        "Alevín A",
        [
          "Preferente Alevín champions;",
          "Madrid ESA Cup Silver Division winners.",
        ],
      ],
      [
        "International tournaments",
        ["Alevín B · Lanzarote Cup;", "Infantil · Lanzarote Cup."],
      ],
      [
        "Individual achievements 2025/26",
        [
          "Debutantes · top goalscorer of the category in Tenerife;",
          "Alevín · top goalscorer of the southern group;",
          "Infantil · top goalscorer of Primera Infantil.",
        ],
      ],
      [
        "Player development 2025/26",
        [
          "3 players earned the opportunity to continue their careers at CD Tenerife;",
          "5 Alevín players called up to the South Canary Islands Selection;",
          "1 player invited to the Rayo Vallecano academy.",
        ],
      ],
    ],
    [
      [
        "2024/25 · Alevín",
        [
          "4º puesto en Preferente Alevín;",
          "Subcampeón de Copa (2º puesto);",
          "Participante en la Lanzarote Cup;",
          "Participante en torneo internacional (nombre por confirmar).",
        ],
      ],
      ["Logros individuales", ["Bota de Oro del torneo;", "MVP del torneo."]],
      [
        "Desarrollo de jugadores",
        [
          "1 jugador logró la oportunidad de continuar su carrera en el CD Tenerife;",
          "1 jugador convocado por la Selección Sur de Canarias.",
        ],
      ],
      [
        "2025/26 · Debutantes",
        [
          "Subcampeones del campeonato del Sur de Tenerife;",
          "Campeones de la Copa Debutantes.",
        ],
      ],
      [
        "Alevín A",
        [
          "Campeones de la Preferente Alevín;",
          "Campeones de la Silver Division en la Madrid ESA Cup.",
        ],
      ],
      [
        "Torneos internacionales",
        ["Alevín B · Lanzarote Cup;", "Infantil · Lanzarote Cup."],
      ],
      [
        "Logros individuales 2025/26",
        [
          "Debutantes · máximo goleador de la categoría en Tenerife;",
          "Alevín · máximo goleador del grupo sur;",
          "Infantil · máximo goleador de Primera Infantil.",
        ],
      ],
      [
        "Desarrollo de jugadores 2025/26",
        [
          "3 jugadores lograron la oportunidad de continuar su carrera en el CD Tenerife;",
          "5 jugadores Alevín convocados por la Selección Sur de Canarias;",
          "1 jugador invitado a la academia del Rayo Vallecano.",
        ],
      ],
    ],
  );
  const render = (x) => (
    <article key={x[0]}>
      <h3>{x[0]}</h3>
      <List items={x[1]} />
    </article>
  );
  return (
    <section className="section achievements-detail">
      <div className="section__inner">
        <Title
          over={tx("ACADEMY BASE", "ACADEMIA BASE")}
          title={tx("OUR ACHIEVEMENTS", "NUESTROS LOGROS")}
        />
        <div className="achievement-columns achievement-columns--highlights">
          {cards.slice(0, 3).map(render)}
        </div>
        <details className="achievement-disclosure">
          <summary>
            {tx("View all achievements", "Ver todos los logros")}
          </summary>
          <div className="achievement-columns">
            {cards.slice(3).map(render)}
          </div>
        </details>
        <div className="success-measure">
          <h3>{tx("Our measure of success", "Nuestro indicador de éxito")}</h3>
          <p>
            {tx(
              "Our main measure is player development and readiness for the next level: professional academy transfers, selection call-ups, individual awards, international performances and continued growth within Respect.",
              "Nuestra medida principal es el desarrollo y la preparación para el siguiente nivel: traspasos a academias profesionales, convocatorias, premios, torneos internacionales y crecimiento dentro de Respect.",
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

function International({ tx }) {
  const features = tx(
    [
      "accommodation;",
      "full board;",
      "programme coordinator;",
      "two daily sessions;",
      "official competitions;",
      "integration into Spanish football;",
      "language support;",
      "medical support;",
      "professional club trials.",
    ],
    [
      "alojamiento;",
      "pensión completa;",
      "coordinador;",
      "dos sesiones diarias;",
      "competiciones oficiales;",
      "integración en el fútbol español;",
      "apoyo lingüístico;",
      "asistencia médica;",
      "pruebas con clubes profesionales.",
    ],
  );
  return (
    <section className="section international-full" id="international">
      <div className="section__inner">
        <Title
          over={tx("INTERNATIONAL ACADEMY", "ACADEMIA INTERNACIONAL")}
          title={tx(
            "Football. Education. Opportunities.",
            "Fútbol. Educación. Oportunidades.",
          )}
        />
        <p className="intro-xl">
          {tx(
            "Designed for players aged 14–19 from around the world.",
            "Diseñada para jugadores de 14 a 19 años de todo el mundo.",
          )}
        </p>
        <p>
          {tx(
            "Players live, study and train in Tenerife in a professional football environment.",
            "Los jugadores viven, estudian y entrenan en Tenerife en un entorno profesional.",
          )}
        </p>
        <ProgrammeStories items={features} />
        <div className="education-block">
          <div>
            <h3>
              {tx(
                "Education and professional development",
                "Educación y desarrollo profesional",
              )}
            </h3>
            <p>
              {tx(
                "In partnership with the Steven Gerrard school:",
                "En colaboración con la escuela de Steven Gerrard:",
              )}
            </p>
            <List
              items={tx(
                [
                  "football and fitness coaching;",
                  "sports nutrition and massage;",
                  "sports medicine and management;",
                  "football business and entrepreneurship.",
                ],
                [
                  "entrenamiento de fútbol y fitness;",
                  "nutrición y masaje deportivo;",
                  "medicina y gestión deportiva;",
                  "negocio y emprendimiento en el fútbol.",
                ],
              )}
            />
          </div>
          <blockquote>
            {tx(
              "We prepare young people for careers as footballers and successful work in the sports industry.",
              "Preparamos a los jóvenes para carreras como futbolistas y para trabajar con éxito en la industria deportiva.",
            )}
          </blockquote>
        </div>
        <h3 className="subheading">
          {tx(
            "Opportunities after the programme",
            "Oportunidades después del programa",
          )}
        </h3>
        <OpportunityStories
          items={tx(
            [
              "Respect Senior Team;",
              "partner clubs;",
              "professional clubs in Spain;",
              "US university programmes;",
              "other European countries.",
            ],
            [
              "Respect Senior Team;",
              "clubes asociados;",
              "clubes profesionales de España;",
              "universidades de EE. UU.;",
              "otros países europeos.",
            ],
          )}
        />
      </div>
    </section>
  );
}

function Community({ tx, locale }) {
  return (
    <>
      <VerifiedNews locale={locale} />
      <YouTubeShowcase locale={tx("en", "es")} />
      <section className="section membership" id="socios">
        <div className="section__inner">
          <Title
            over="SOCIOS DEL CLUB"
            title={tx("Become part of Respect", "Forma parte de Respect")}
          />
          <div className="membership-grid">
            <article>
              <span>SOCIO</span>
              <h3>
                50 € <small>{tx("/ year", "/ año")}</small>
              </h3>
              <List
                items={tx(
                  [
                    "membership card;",
                    "partner discounts;",
                    "club offers and events;",
                    "1 Christmas lottery ticket.",
                  ],
                  [
                    "tarjeta Socio;",
                    "descuentos de socios;",
                    "ofertas y eventos;",
                    "1 boleto de lotería de Navidad.",
                  ],
                )}
              />
            </article>
            <article className="membership-gold">
              <span>SOCIO GOLD</span>
              <h3>
                200 € <small>{tx("/ year", "/ año")}</small>
              </h3>
              <List
                items={tx(
                  [
                    "everything in Socio;",
                    "private member section;",
                    "match videos and photo archive;",
                    "training and development libraries;",
                    "coaching methodology resources;",
                    "2 Christmas lottery tickets.",
                  ],
                  [
                    "todo lo incluido en Socio;",
                    "sección privada;",
                    "vídeos y archivo fotográfico;",
                    "bibliotecas de entrenamiento;",
                    "materiales metodológicos;",
                    "2 boletos de lotería de Navidad.",
                  ],
                )}
              />
            </article>
          </div>
        </div>
      </section>
      <Sponsors locale={locale} />
      <section className="section partners-full" id="partners">
        <div className="section__inner brief-two-col">
          <div>
            <Title
              over={tx("PARTNERS AND SPONSORS", "SOCIOS Y PATROCINADORES")}
              title={tx(
                "Support every part of the project",
                "Apoya cada parte del proyecto",
              )}
            />
            <List
              items={[
                "Senior Team;",
                "Academy Base;",
                "International Academy;",
                tx("tournaments and camps;", "torneos y campus;"),
                tx(
                  "education and social projects.",
                  "educación y proyectos sociales.",
                ),
              ]}
            />
          </div>
          <div className="brief-panel">
            <h3>{tx("Partnership formats", "Formatos de colaboración")}</h3>
            <List
              items={tx(
                [
                  "Main Partner;",
                  "Academy Partner;",
                  "Team Partner;",
                  "Event Partner;",
                  "Technical Partner.",
                ],
                [
                  "Socio principal;",
                  "Socio de academia;",
                  "Socio de equipo;",
                  "Socio de eventos;",
                  "Socio técnico.",
                ],
              )}
            />
            <a
              className="btn btn--gold"
              href="mailto:cdrespect.es@gmail.com?subject=Partnership%20enquiry"
            >
              {tx("Become a partner", "Conviértete en socio")} <Arrow />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
function Values({ tx }) {
  return (
    <section className="section section--cream" id="values">
      <div className="section__inner">
        <Title
          over="RESPECT"
          title={tx(
            "What guides every decision we make.",
            "Lo que guía cada decisión que tomamos.",
          )}
        />
        <div className="values-grid">
          {tx(
            [
              "Respect",
              "Ambition",
              "Discipline",
              "Intelligence",
              "Development",
              "Opportunities",
            ],
            [
              "Respeto",
              "Ambición",
              "Disciplina",
              "Inteligencia",
              "Desarrollo",
              "Oportunidades",
            ],
          ).map((x) => (
            <div className="value" key={x}>
              <strong>{x}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ tx }) {
  const bases = [
    [
      "EL FRAILE",
      "Campo Municipal de Fútbol Dionisio González",
      "Campo Municipal de Fútbol Dionisio González, El Fraile, Arona, Tenerife",
    ],
    ["LOS CRISTIANOS", "Los Cristianos", "Los Cristianos, Arona, Tenerife"],
  ];
  return (
    <section className="section section--cream" id="facilities">
      <div className="section__inner">
        <Title
          over={tx("TRAINING FACILITIES", "INSTALACIONES")}
          title={tx("Our bases in Tenerife", "Nuestras bases en Tenerife")}
        />
        <div className="facility-cards">
          {bases.map((x, i) => (
            <article key={x[0]}>
              <div className="facility-map">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(x[2])}&z=15&output=embed`}
                  title={`${x[1]} · Google Maps`}
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                className="map-fallback"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(x[2])}`}
                target="_blank"
                rel="noreferrer"
              >
                {tx("Open in Google Maps", "Abrir en Google Maps")} <Arrow />
              </a>
              <p>
                {i
                  ? tx("Additional base", "Base adicional")
                  : tx("Primary base", "Base principal")}
              </p>
              <h3>{x[1]}</h3>
              <span>Arona, Tenerife</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MerchCareers({ tx }) {
  const products = tx(
    [
      ["Match Kit", "Official club collection"],
      ["Training Wear", "For the pitch and beyond"],
      ["Accessories", "Club colours every day"],
    ],
    [
      ["Equipación de partido", "Colección oficial del club"],
      ["Ropa de entrenamiento", "Para el campo y fuera de él"],
      ["Accesorios", "Los colores del club cada día"],
    ],
  );
  return (
    <>
      <section className="section merch-section" id="merch">
        <div className="section__inner">
          <Title
            over="RESPECT MERCH"
            title={tx(
              "Wear the Respect colours",
              "Viste los colores de Respect",
            )}
          />
          <p className="intro-xl">
            {tx(
              "Official kit and club lifestyle collection from Respect Football Project.",
              "Equipación oficial y colección lifestyle de Respect Football Project.",
            )}
          </p>
          <div className="merch-grid">
            {products.map((x) => (
              <article key={x[0]}>
                <div className="merch-product">R</div>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </article>
            ))}
          </div>
          <a
            className="btn btn--gold"
            href="mailto:cdrespect.es@gmail.com?subject=Respect%20Merch"
          >
            {tx("Discover the collection", "Descubre la colección")} <Arrow />
          </a>
        </div>
      </section>
      <section className="section careers-section" id="careers">
        <div className="section__inner brief-two-col">
          <div>
            <Title
              over={tx("CAREERS AT RESPECT", "TRABAJA EN RESPECT")}
              title={tx(
                "Develop football with us",
                "Desarrolla el fútbol con nosotros",
              )}
            />
            <p className="large-copy">
              {tx(
                "We are building a professional club structure and looking for people who share our values, ambition and long-term vision.",
                "Estamos construyendo una estructura profesional y buscamos personas que compartan nuestros valores, ambición y visión a largo plazo.",
              )}
            </p>
          </div>
          <div className="career-roles">
            {tx(
              [
                "Coaching",
                "Sport management",
                "Medicine & performance",
                "Content & communications",
              ],
              [
                "Cuerpo técnico",
                "Gestión deportiva",
                "Medicina y rendimiento",
                "Contenido y comunicación",
              ],
            ).map((x) => (
              <a
                href="mailto:cdrespect.es@gmail.com?subject=Careers%20at%20Respect"
                key={x}
              >
                <strong>{x}</strong>
                <Arrow />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
