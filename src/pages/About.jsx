import { Link } from "react-router-dom";
import { PageHero } from "../Layout.jsx";
import { choreographers, dances, groups, regions, story } from "../data.js";
import { Icon } from "../icons.jsx";

const jumps = [
  { href: "/za-nas#istoria", label: "История", icon: "sun", tone: "orange" },
  { href: "/za-nas#grupi", label: "Групи", icon: "users", tone: "red" },
  { href: "/za-nas#rakovoditeli", label: "Ръководители", icon: "spark", tone: "gold" },
  { href: "/za-nas#tanci", label: "Танци", icon: "music", tone: "green" },
];

export default function About() {
  return (
    <>
      <PageHero
        kicker="За нас"
        title="Съставът, който пази хорото"
        text="Над 350 деца в осем групи, двама художествени ръководители и репертоар от етнографските области на България."
      />
      <nav className="about-jump" aria-label="В страницата">
        {jumps.map((item) => (
          <Link className={`tone-${item.tone}`} key={item.href} to={item.href}>
            <Icon name={item.icon} />
            {item.label}
          </Link>
        ))}
      </nav>

      <section className="section about-block" id="istoria">
        <div className="section-head">
          <p className="index">История</p>
          <h2>Две десетилетия хоро</h2>
          <p className="sub">
            От първите деца в Младежкия дом до сцените в страната и в Брюксел.
          </p>
        </div>
        <div className="about-photos">
          <Link className="tile" to="/albumi/scena">
            <img src="/photos/brussels-dance.jpg" alt="Танц в Брюксел" style={{ objectPosition: "center 42%" }} />
            <span>Брюксел</span>
          </Link>
          <Link className="tile" to="/albumi/scena">
            <img src="/photos/ancient-lift.jpg" alt="Концерт на Античния театър" style={{ objectPosition: "center 40%" }} />
            <span>Античен театър</span>
          </Link>
          <Link className="tile" to="/albumi/scena">
            <img src="/photos/skopje.jpg" alt="Най-малката група в Скопие" style={{ objectPosition: "center 46%" }} />
            <span>Скопие</span>
          </Link>
          <Link className="tile" to="/albumi/ploshtad">
            <img src="/photos/square.jpg" alt="Хоро пред часовниковата кула" style={{ objectPosition: "center 45%" }} />
            <span>Площадът</span>
          </Link>
        </div>
        <ol className="story">
          {story.map((item) => (
            <li key={`${item.year}-${item.title}`}>
              {item.image ? (
                <img src={item.image} alt="" style={{ objectPosition: item.focus || "center" }} />
              ) : null}
              <time>{item.year}</time>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section about-block" id="grupi">
        <div className="section-head">
          <p className="index">Групи</p>
          <h2>От първата стъпка до представителната сцена</h2>
          <p className="sub">
            В „Чудесия“ танцуват над 350 деца на възраст от 5 до 18 години,
            разпределени в осем групи. На конкурс излизат по възрастови
            категории — в залата обаче работят и осемте.
          </p>
        </div>
        <div className="about-photos about-photos-3">
          <img src="/photos/plovdiv-group.jpg" alt="Детска група след фестивала в Пловдив" style={{ objectPosition: "center 45%" }} />
          <img src="/photos/contest-men.jpg" alt="Мъжка редица на конкурсна сцена" style={{ objectPosition: "center 78%" }} />
          <img src="/photos/awards-group.jpg" alt="Танцьорите с купи след конкурса" style={{ objectPosition: "center 40%" }} />
        </div>
        <ol className="group-board">
          {groups.map((group) => (
            <li key={group.n}>
              <span>{group.n}</span>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section about-block leaders-block" id="rakovoditeli">
        <div className="section-head">
          <p className="index">Ръководители</p>
          <h2>Таня Димитрова и Димитър Димитров</h2>
          <p className="sub">
            Двамата водят осемте групи — от първата репетиция в Младежкия дом
            до фестивалната сцена.
          </p>
        </div>
        <div className="leader-cards">
          <article>
            <img src="/photos/tanya.jpg" alt="Таня Димитрова" />
            <div>
              <p className="role">Основател и главен художествен ръководител</p>
              <h3>Таня Димитрова</h3>
              <p>
                Основател и художествен ръководител. През 2005 г. събира
                първите деца в Младежки дом – Пазарджик. На 7 април 2006 г.
                съставът получава името „Чудесия“. Тя държи посоката му вече
                две десетилетия.
              </p>
              <blockquote>
                „Изкуството дава криле.“
                <cite>Таня Димитрова</cite>
              </blockquote>
            </div>
          </article>
          <article>
            <img src="/photos/dimitar.jpg" alt="Димитър Димитров" />
            <div>
              <p className="role">Художествен ръководител и хореограф</p>
              <h3>Димитър Димитров</h3>
              <p>
                Художествен ръководител и хореограф. Заедно с Таня Димитрова
                води групите на национални конкурси и международни фестивали —
                от „Голямата танцова награда“ до сцената в Скопие.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section about-block" id="tanci">
        <div className="section-head">
          <p className="index">Танци</p>
          <h2>Танци и хореографи</h2>
          <p className="sub">
            Две тракийски заглавия и хората, които ги правят. Останалата
            програма минава през областите на България.
          </p>
        </div>
        <div className="makers">
          {choreographers.map((person) => (
            <article key={person.name}>
              {person.image ? (
                <img src={person.image} alt="" />
              ) : (
                <span className="maker-mark" aria-hidden="true">
                  <Icon name="music" />
                </span>
              )}
              <div>
                <p>{person.role}</p>
                <h3>{person.name}</h3>
                <span>{person.text}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="dance-show">
          {dances.map((dance) => (
            <article key={dance.title}>
              <div className="dance-shot">
                <img src={dance.image} alt="" style={{ objectPosition: dance.focus || "center" }} />
                {dance.place ? <span>{dance.place}</span> : null}
              </div>
              <div>
                <p>{dance.area}</p>
                <h3>{dance.title}</h3>
                {dance.by ? <strong>{dance.by}</strong> : null}
                <span>{dance.text}</span>
              </div>
            </article>
          ))}
        </div>
        <h2 className="block-title">Областите в програмата</h2>
        <ul className="region-grid">
          {regions.map((region) => (
            <li className={`tone-${region.tone}`} key={region.title}>
              <span className="badge">
                <Icon name={region.icon} />
              </span>
              <h3>{region.title}</h3>
              <p>{region.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
