import { useState } from "react";

const CHANNEL_URL = "https://www.youtube.com/@CDRespect";
const VIDEOS = [
  { id: "P5K0H-hnftA", title: "Lanzarote International Cup · Respect Infantil · 2026" },
  { id: "3m5N_YnZjmQ", title: "Respect vs Guargacho · Infantil Primera Liga" },
  { id: "QN9OWduz1iU", title: "Respect vs Chenet · Infantil Primera Liga" },
];

export default function YouTubeShowcase({ locale = "en" }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const copy = {
    en: {
      eyebrow: "CD RESPECT TV",
      title: "Watch Respect in action",
      intro: "Training, matches and life inside CD Respect — directly from our official YouTube channel.",
      link: "Visit our YouTube channel",
      frame: "CD Respect YouTube video",
      play: "Play video",
    },
    es: {
      eyebrow: "CD RESPECT TV",
      title: "Mira a Respect en acción",
      intro: "Entrenamientos, partidos y la vida dentro de CD Respect, directamente desde nuestro canal oficial de YouTube.",
      link: "Visita nuestro canal de YouTube",
      frame: "Vídeo de CD Respect en YouTube",
      play: "Reproducir vídeo",
    },
    ru: {
      eyebrow: "CD RESPECT TV",
      title: "Смотрите Respect в действии",
      intro: "Тренировки, матчи и жизнь CD Respect — на нашем официальном YouTube-канале.",
      link: "Перейти на наш YouTube-канал",
      frame: "Видео CD Respect на YouTube",
      play: "Воспроизвести видео",
    },
  }[locale];

  return (
    <section className="section youtube-showcase" aria-labelledby="youtube-title">
      <div className="section__inner">
        <div className="youtube-showcase__heading">
          <div>
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 id="youtube-title">{copy.title}</h2>
          </div>
          <p>{copy.intro}</p>
        </div>
        <div className="youtube-showcase__grid">
          {VIDEOS.map((video) => (
            <div className="youtube-showcase__video" key={video.id}>
              {activeVideo === video.id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                  title={`${copy.frame}: ${video.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  className="youtube-showcase__poster"
                  type="button"
                  onClick={() => setActiveVideo(video.id)}
                  aria-label={`${copy.play}: ${video.title}`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    width="480"
                    height="360"
                  />
                  <span className="youtube-showcase__play" aria-hidden="true">▶</span>
                  <strong>{video.title}</strong>
                </button>
              )}
            </div>
          ))}
        </div>
        <a className="youtube-showcase__link" href={CHANNEL_URL} target="_blank" rel="noreferrer">
          {copy.link} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
