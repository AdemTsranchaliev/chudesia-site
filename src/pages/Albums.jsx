import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "../Layout.jsx";
import { albums } from "../data.js";
import { Icon } from "../icons.jsx";

export function AlbumIndex() {
  return (
    <>
      <PageHero
        kicker="Албуми"
        title="Концерти, сцена и награди"
        text="Снимки от изявите на състава — площадът в Пазарджик, конкурсните сцени и моментите след наградите. Албумите се допълват с кадри от турнета и нови концерти."
      />
      <section className="section">
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
                <span>
                  {album.photos.length}{" "}
                  {album.photos.length === 1 ? "снимка" : "снимки"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function AlbumView() {
  const { slug } = useParams();
  const album = albums.find((item) => item.slug === slug);
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(null);
  }, [slug]);

  useEffect(() => {
    if (active === null || !album) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((index) => (index + 1) % album.photos.length);
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index - 1 + album.photos.length) % album.photos.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, album]);

  if (!album) return <Navigate to="/albumi" replace />;

  const photo = active === null ? null : album.photos[active];

  return (
    <>
      <PageHero kicker={album.place} title={album.title} text={album.text} />
      <section className="section">
        <p className="album-back">
          <Link to="/albumi">Всички албуми</Link>
        </p>
        <div className="album-photos">
          {album.photos.map((item, index) => (
            <button
              className="shot"
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
            >
              <img src={item.src} alt={item.alt} />
              <span>{item.caption}</span>
            </button>
          ))}
        </div>
      </section>
      {photo ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={photo.caption}>
          <button className="lightbox-close" type="button" onClick={() => setActive(null)}>
            Затвори
          </button>
          <figure>
            <img src={photo.src} alt={photo.alt} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
          <div className="lightbox-nav">
            <button
              type="button"
              onClick={() =>
                setActive((index) => (index - 1 + album.photos.length) % album.photos.length)
              }
            >
              Предишна
            </button>
            <button
              type="button"
              onClick={() => setActive((index) => (index + 1) % album.photos.length)}
            >
              Следваща
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
