import { useState } from "react";
import { Link } from "react-router-dom";
import { albums, dances, festivals, groups, stageVideo } from "../data.js";
import { Icon } from "../icons.jsx";

const mosaic = [
  {
    src: "/photos/ancient-lift.jpg",
    caption: "Античен театър, Пловдив",
    to: "/albumi/scena",
    focus: "center 42%",
  },
  {
    src: "/photos/brussels-horo.jpg",
    caption: "Хоро в Брюксел",
    to: "/albumi/scena",
    focus: "center bottom",
  },
  {
    src: "/photos/contest-2026.jpg",
    caption: "Конкурс, 2026",
    to: "/albumi/scena",
    focus: "center 46%",
  },
  {
    src: "/photos/kids-2026.jpg",
    caption: "Най-малките",
    to: "/albumi/scena",
    focus: "center 28%",
  },
];

const places = [
  "Тракия",
  "Шоплук",
  "Добруджа",
  "Северняшка област",
  "Родопи",
  "Пирин",
];

const highlights = [festivals[0], festivals[2], festivals[4]];

const stats = [
  { label: "Основан", value: "2005", icon: "spark", tone: "gold" },
  { label: "Деца", value: "350+", icon: "users", tone: "red" },
  { label: "Групи", value: "8", icon: "music", tone: "green" },
  { label: "Възраст", value: "5–18", icon: "sun", tone: "sea" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">Младежки дом · Пазарджик</p>
          <h1>Чудесия</h1>
          <div className="ribbon" aria-hidden="true" />
          <p className="lede">
            Представителен танцов състав. Над 350 деца в осем групи пазят
            българското хоро — от залата на Младежкия дом до сцените в страната
            и по света.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-gold" to="/za-nas">
              За нас
            </Link>
            <Link className="btn btn-ghost" to="/albumi">
              Албуми
            </Link>
          </div>
          <dl className="stats">
            {stats.map((item) => (
              <div className={`tone-${item.tone}`} key={item.label}>
                <dt>
                  <Icon name={item.icon} />
                  {item.label}
                </dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="hero-photo">
          <img
            src="/photos/brussels-dance.jpg"
            alt="Танцьори от „Чудесия“ на площада в Брюксел"
          />
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {places.concat(places).map((place, index) => (
            <span key={`${place}-${index}`}>{place}</span>
          ))}
        </div>
      </div>

      <section className="section mosaic-section">
        <div className="section-head mosaic-head">
          <div>
            <p className="index">Кадри</p>
            <h2>На живо</h2>
            <p className="sub">Пловдив, Брюксел и конкурсната сцена.</p>
          </div>
          <Link className="text-link" to="/albumi">
            Албумите
          </Link>
        </div>
        <div className="mosaic">
          {mosaic.map((item) => (
            <Link className={`tile ${item.className || ""}`} key={item.src} to={item.to}>
              <img src={item.src} alt="" style={{ objectPosition: item.focus }} />
              <span>{item.caption}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section home-people">
        <div className="people-layout">
          <div className="people-copy">
            <p className="index">Ръководители</p>
            <h2>Таня и Димитър</h2>
            <p>
              Таня Димитрова основава състава през 2005 г. На 7 април 2006 г. той
              получава името „Чудесия“. Двамата водят осемте групи.
            </p>
            <blockquote className="people-quote">
              „Изкуството дава криле.“
              <cite>Таня Димитрова</cite>
            </blockquote>
            <Link className="text-link" to="/za-nas#rakovoditeli">
              Повече за ръководителите
            </Link>
          </div>
          <div className="people-portraits">
            <figure>
              <img src="/photos/tanya.jpg" alt="Таня Димитрова" />
              <figcaption>
                <strong>Таня Димитрова</strong>
                <span>Основател и художествен ръководител</span>
              </figcaption>
            </figure>
            <figure>
              <img src="/photos/dimitar.jpg" alt="Димитър Димитров" />
              <figcaption>
                <strong>Димитър Димитров</strong>
                <span>Художествен ръководител и хореограф</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section home-groups">
        <div className="section-head">
          <p className="index">Групи</p>
          <h2>От първата до осмата</h2>
          <p className="sub">
            Осем репетиционни групи. Децата са на възраст от около 5 до 18 години.
          </p>
        </div>
        <ol className="group-rail">
          {groups.map((group) => (
            <li key={group.n}>
              <Link to="/za-nas#grupi">
                <span>{group.n}</span>
                <strong>{group.title}</strong>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="section home-program">
        <div className="section-head mosaic-head">
          <div>
            <p className="index">Танци</p>
            <h2>На сцената</h2>
          </div>
          <Link className="text-link" to="/za-nas#tanci">
            Областите в програмата
          </Link>
        </div>
        <div className="program">
          {dances.map((dance) => (
            <article key={dance.title}>
              <p>{dance.area}</p>
              <h3>{dance.title}</h3>
              {dance.by ? <strong>{dance.by}</strong> : null}
              <span>{dance.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section home-awards">
        <div className="section-head mosaic-head">
          <div>
            <p className="index">Награди</p>
            <h2>Последни отличия</h2>
          </div>
          <Link className="text-link" to="/nagradi">
            Всички награди
          </Link>
        </div>
        <div className="award-cards">
          {highlights.map((item) => (
            <article key={`${item.year}-${item.title}`}>
              <time>{item.year}</time>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
            </article>
          ))}
        </div>
      </section>

      <VideoStage />

      <section className="section gallery-section">
        <div className="section-head">
          <p className="index">Албуми</p>
          <h2>Площад, сцена, награди</h2>
        </div>
        <div className="album-grid">
          {albums.map((album) => (
            <Link className={`album-card tone-${album.tone}`} key={album.slug} to={`/albumi/${album.slug}`}>
              <img src={album.photos[0].src} alt="" />
              <span className="badge">
                <Icon name={album.icon} />
              </span>
              <div>
                <p>{album.place}</p>
                <h2>{album.title}</h2>
                <span>{album.photos.length} снимки</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="join-band">
        <div>
          <p className="index">Записване</p>
          <h2>Място в залата</h2>
          <p>Младежки дом, ул. „Екзарх Йосиф“ 6, Пазарджик.</p>
        </div>
        <div className="join-actions">
          <a href="tel:+359879605623">0879 605 623</a>
          <Link className="btn btn-gold" to="/kontakt">
            Запиши се
          </Link>
        </div>
      </section>
    </>
  );
}

function VideoStage() {
  const [playing, setPlaying] = useState(false);
  const youtube = stageVideo.youtubeId;
  const file = stageVideo.src;
  const ready = Boolean(youtube || file);

  return (
    <section className="section video-section">
      <div className="video-layout">
        <div>
          <p className="index">Видео</p>
          <h2>От сцената</h2>
          <p className="sub">Място за клип от концерт или турне.</p>
        </div>
        <div className="video-frame">
        {playing && youtube ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtube}?autoplay=1`}
            title={stageVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}
        {playing && !youtube && file ? (
          <video src={file} poster={stageVideo.poster} controls autoPlay playsInline />
        ) : null}
        {!playing && ready ? (
          <button className="video-poster" type="button" onClick={() => setPlaying(true)}>
            <img src={stageVideo.poster} alt="" />
            <span className="video-play">Пусни</span>
          </button>
        ) : null}
        {!playing && !ready ? (
          <div className="video-poster">
            <img src={stageVideo.poster} alt="Съставът на конкурсна сцена" />
            <span className="video-note">Място за видео</span>
          </div>
        ) : null}
        </div>
      </div>
    </section>
  );
}
