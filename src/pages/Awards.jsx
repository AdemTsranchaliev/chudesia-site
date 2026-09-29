import { Link } from "react-router-dom";
import { PageHero } from "../Layout.jsx";
import { festivals } from "../data.js";
import { Icon } from "../icons.jsx";

const shots = [
  {
    src: "/photos/awards-group.jpg",
    alt: "Танцьорите с купи и дипломи след конкурса",
    label: "След конкурса",
    focus: "center 42%",
  },
  {
    src: "/photos/trophies-2026.jpg",
    alt: "Купи и дипломи от Голямата танцова награда, 2026",
    label: "Купите, 2026",
    focus: "center 28%",
  },
  {
    src: "/photos/diploma-2026.jpg",
    alt: "Диплом от Голямата танцова награда, 2026",
    label: "Диплом, 2026",
    focus: "center 36%",
  },
  {
    src: "/photos/lyra.jpg",
    alt: "Диплом за Кристална лира 2025, категория танцов фолклор",
    label: "Кристална лира",
    focus: "center 22%",
  },
];

export default function Awards() {
  return (
    <>
      <PageHero
        kicker="Награди"
        title="Първите места и големите отличия"
        text="От „Огънят на поколенията“ до „Голямата танцова награда“. Концертите са в Пазарджик, а отличията идват от сцените в страната и навън."
      />
      <section className="section awards-page">
        <div className="section-head mosaic-head">
          <div>
            <p className="index">Кадри</p>
            <h2>Купи и дипломи</h2>
          </div>
          <Link className="text-link" to="/albumi/nagradi">
            Албумът
          </Link>
        </div>
        <div className="about-photos">
          {shots.map((shot) => (
            <Link className="tile" to="/albumi/nagradi" key={shot.src}>
              <img src={shot.src} alt={shot.alt} style={{ objectPosition: shot.focus }} />
              <span>{shot.label}</span>
            </Link>
          ))}
        </div>
        <ol className="prize-board">
          {festivals.map((item) => (
            <li key={`${item.year}-${item.title}`}>
              <time>
                <Icon name="trophy" />
                {item.year}
              </time>
              <p className="place">{item.place}</p>
              <h3>{item.title}</h3>
              <p>{item.result}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
