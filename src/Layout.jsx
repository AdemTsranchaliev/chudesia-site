import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  { to: "/", end: true },
  { to: "/za-nas" },
  { to: "/nagradi" },
  { to: "/albumi" },
  { to: "/kontakt" },
];

const languages = ["bg", "en", "de", "fr", "es", "it", "ru", "tr", "zh", "ar"];

const copy = {
  bg: {
    code: "БГ",
    name: "Български",
    links: ["Начало", "За нас", "Награди", "Албуми", "Контакт"],
    cta: "Записване",
    skip: "Към съдържанието",
    open: "Отвори менюто",
    close: "Затвори менюто",
    pages: "Страници",
    contact: "Контакт",
    follow: "Последвайте",
    lang: "Език",
    blurb: "Представителен танцов състав. Осем групи, от около 5 до 18 години.",
  },
  en: {
    code: "EN",
    name: "English",
    links: ["Home", "About", "Awards", "Albums", "Contact"],
    cta: "Enroll",
    skip: "Skip to content",
    open: "Open menu",
    close: "Close menu",
    pages: "Pages",
    contact: "Contact",
    follow: "Follow",
    lang: "Language",
    blurb: "Representative dance ensemble. Eight groups, from about 5 to 18 years old.",
  },
  de: {
    code: "DE",
    name: "Deutsch",
    links: ["Start", "Über uns", "Auszeichnungen", "Alben", "Kontakt"],
    cta: "Anmeldung",
    skip: "Zum Inhalt",
    open: "Menü öffnen",
    close: "Menü schließen",
    pages: "Seiten",
    contact: "Kontakt",
    follow: "Folgen",
    lang: "Sprache",
    blurb: "Repräsentatives Tanzensemble. Acht Gruppen, etwa 5 bis 18 Jahre.",
  },
  fr: {
    code: "FR",
    name: "Français",
    links: ["Accueil", "À propos", "Récompenses", "Albums", "Contact"],
    cta: "Inscription",
    skip: "Aller au contenu",
    open: "Ouvrir le menu",
    close: "Fermer le menu",
    pages: "Pages",
    contact: "Contact",
    follow: "Suivre",
    lang: "Langue",
    blurb: "Ensemble de danse représentatif. Huit groupes, d’environ 5 à 18 ans.",
  },
  es: {
    code: "ES",
    name: "Español",
    links: ["Inicio", "Nosotros", "Premios", "Álbumes", "Contacto"],
    cta: "Inscripción",
    skip: "Ir al contenido",
    open: "Abrir el menú",
    close: "Cerrar el menú",
    pages: "Páginas",
    contact: "Contacto",
    follow: "Síguenos",
    lang: "Idioma",
    blurb: "Conjunto de danza representativo. Ocho grupos, de unos 5 a 18 años.",
  },
  it: {
    code: "IT",
    name: "Italiano",
    links: ["Home", "Chi siamo", "Premi", "Album", "Contatti"],
    cta: "Iscrizione",
    skip: "Vai al contenuto",
    open: "Apri il menu",
    close: "Chiudi il menu",
    pages: "Pagine",
    contact: "Contatti",
    follow: "Seguici",
    lang: "Lingua",
    blurb: "Complesso di danza rappresentativo. Otto gruppi, da circa 5 a 18 anni.",
  },
  ru: {
    code: "RU",
    name: "Русский",
    links: ["Начало", "О нас", "Награды", "Альбомы", "Контакт"],
    cta: "Запись",
    skip: "К содержанию",
    open: "Открыть меню",
    close: "Закрыть меню",
    pages: "Страницы",
    contact: "Контакт",
    follow: "Подписаться",
    lang: "Язык",
    blurb: "Представительный танцевальный состав. Восемь групп, примерно от 5 до 18 лет.",
  },
  tr: {
    code: "TR",
    name: "Türkçe",
    links: ["Ana sayfa", "Hakkımızda", "Ödüller", "Albümler", "İletişim"],
    cta: "Kayıt",
    skip: "İçeriğe geç",
    open: "Menüyü aç",
    close: "Menüyü kapat",
    pages: "Sayfalar",
    contact: "İletişim",
    follow: "Takip edin",
    lang: "Dil",
    blurb: "Temsilî dans topluluğu. Sekiz grup, yaklaşık 5–18 yaş.",
  },
  zh: {
    code: "中文",
    name: "中文",
    links: ["首页", "关于", "奖项", "相册", "联系"],
    cta: "报名",
    skip: "跳到内容",
    open: "打开菜单",
    close: "关闭菜单",
    pages: "页面",
    contact: "联系",
    follow: "关注",
    lang: "语言",
    blurb: "代表性舞蹈团体。八个组，约 5 至 18 岁。",
  },
  ar: {
    code: "عربي",
    name: "العربية",
    links: ["الرئيسية", "من نحن", "الجوائز", "الألبومات", "اتصال"],
    cta: "تسجيل",
    skip: "إلى المحتوى",
    open: "افتح القائمة",
    close: "أغلق القائمة",
    pages: "الصفحات",
    contact: "اتصال",
    follow: "تابعنا",
    lang: "اللغة",
    blurb: "فرقة رقص تمثيلية. ثماني مجموعات، من نحو 5 إلى 18 سنة.",
  },
};

function readLang() {
  try {
    const saved = localStorage.getItem("chudesia-lang");
    return languages.includes(saved) ? saved : "bg";
  } catch {
    return "bg";
  }
}

function Flag({ code }) {
  const marks = {
    bg: (
      <>
        <rect width="24" height="5.34" fill="#fff" />
        <rect y="5.34" width="24" height="5.33" fill="#00966e" />
        <rect y="10.67" width="24" height="5.33" fill="#d62612" />
      </>
    ),
    en: (
      <>
        <rect width="24" height="16" fill="#012169" />
        <path d="M0 0 L24 16 M24 0 L0 16" stroke="#fff" strokeWidth="3.4" />
        <path d="M0 0 L24 16 M24 0 L0 16" stroke="#c8102e" strokeWidth="1.7" />
        <path d="M12 0 V16 M0 8 H24" stroke="#fff" strokeWidth="5.4" />
        <path d="M12 0 V16 M0 8 H24" stroke="#c8102e" strokeWidth="3.1" />
      </>
    ),
    de: (
      <>
        <rect width="24" height="5.34" fill="#000" />
        <rect y="5.34" width="24" height="5.33" fill="#dd0000" />
        <rect y="10.67" width="24" height="5.33" fill="#ffce00" />
      </>
    ),
    fr: (
      <>
        <rect width="8" height="16" fill="#0055a4" />
        <rect x="8" width="8" height="16" fill="#fff" />
        <rect x="16" width="8" height="16" fill="#ef4135" />
      </>
    ),
    es: (
      <>
        <rect width="24" height="16" fill="#c60b1e" />
        <rect y="4" width="24" height="8" fill="#ffc400" />
      </>
    ),
    it: (
      <>
        <rect width="8" height="16" fill="#009246" />
        <rect x="8" width="8" height="16" fill="#fff" />
        <rect x="16" width="8" height="16" fill="#ce2b37" />
      </>
    ),
    ru: (
      <>
        <rect width="24" height="5.34" fill="#fff" />
        <rect y="5.34" width="24" height="5.33" fill="#0039a6" />
        <rect y="10.67" width="24" height="5.33" fill="#d52b1e" />
      </>
    ),
    tr: (
      <>
        <rect width="24" height="16" fill="#e30a17" />
        <circle cx="9" cy="8" r="3.5" fill="#fff" />
        <circle cx="10.1" cy="8" r="2.8" fill="#e30a17" />
        <polygon fill="#fff" points="13.1,8 14.7,8.55 14.05,7 15.4,6.05 13.7,6.05 13.1,4.5 12.5,6.05 10.8,6.05 12.15,7 11.5,8.55" />
      </>
    ),
    zh: (
      <>
        <rect width="24" height="16" fill="#de2910" />
        <polygon fill="#ffde00" points="5,2.1 5.7,4.1 7.8,4.1 6.1,5.3 6.7,7.3 5,6.1 3.3,7.3 3.9,5.3 2.2,4.1 4.3,4.1" />
      </>
    ),
    ar: (
      <>
        <rect width="24" height="5.34" fill="#ce1126" />
        <rect y="5.34" width="24" height="5.33" fill="#fff" />
        <rect y="10.67" width="24" height="5.33" fill="#000" />
      </>
    ),
  };
  return (
    <svg className="flag" viewBox="0 0 24 16" aria-hidden="true">
      {marks[code]}
    </svg>
  );
}

function SocialIcon({ name }) {
  const paths = {
    facebook: (
      <path
        fill="currentColor"
        d="M14.2 8.4V6.9c0-.7.4-.9 1.1-.9H17V3.4h-2.2C12.1 3.4 11 4.7 11 6.7v1.7H9v2.6h2V21h3.2v-9.7h2.2l.4-2.6h-2.6z"
      />
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.7" cy="7.3" r="0.9" fill="currentColor" />
      </>
    ),
    youtube: (
      <>
        <rect x="2.5" y="6" width="19" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path fill="currentColor" d="M11 9.5v5l4.5-2.5z" />
      </>
    ),
  };
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function PageHero({ kicker, title, text }) {
  return (
      <header className="page-hero">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {text ? <p>{text}</p> : null}
        <div className="ribbon" aria-hidden="true" />
      </header>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState(readLang);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const { pathname, hash } = useLocation();
  const text = copy[lang];

  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
    if (hash) {
      const node = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (node) {
        node.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("lock", open);
  }, [open]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("chudesia-lang", lang);
    } catch {
      /* preference stays for this visit */
    }
  }, [lang]);

  useEffect(() => {
    if (!langOpen) return undefined;
    const onPointer = (event) => {
      if (!langRef.current?.contains(event.target)) setLangOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  return (
    <>
      <a className="skip" href="#sadirzhanie">
        {text.skip}
      </a>
      <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
        <NavLink className="brand" to="/" end>
          <span>
            Чудесия
            <small>Пазарджик</small>
          </span>
        </NavLink>
        <nav className={open ? "open" : ""} aria-label="Основно">
          {links.map((link, index) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {text.links[index]}
            </NavLink>
          ))}
        </nav>
        <div className="lang" ref={langRef}>
          <button
            className="lang-btn"
            type="button"
            aria-expanded={langOpen}
            aria-haspopup="listbox"
            aria-label={text.lang}
            onClick={() => setLangOpen((value) => !value)}
          >
            <Flag code={lang} />
            <span>{text.code}</span>
            <svg className="chevron" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2.2 4.4 6 8l3.8-3.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          {langOpen ? (
            <ul className="lang-menu" role="listbox" aria-label={text.lang}>
              {languages.map((code) => (
                <li key={code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={lang === code}
                    onClick={() => {
                      setLang(code);
                      setLangOpen(false);
                    }}
                  >
                    <Flag code={code} />
                    {copy[code].name}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <NavLink className="nav-cta" to="/kontakt">
          {text.cta}
        </NavLink>
        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-label={open ? text.close : text.open}
          onClick={() => {
            setLangOpen(false);
            setOpen((value) => !value);
          }}
        >
          <span />
          <span />
        </button>
      </header>
      <main id="sadirzhanie">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-brand">
          <div>
            <strong>ПТС „Чудесия“</strong>
            <span>Младежки дом · Пазарджик</span>
          </div>
          <p>{text.blurb}</p>
        </div>
        <nav className="footer-nav" aria-label="В сайта">
          <p>{text.pages}</p>
          {links.map((link, index) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {text.links[index]}
            </NavLink>
          ))}
        </nav>
        <div className="footer-contact">
          <p>{text.contact}</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=42.1901654,24.3317225"
            target="_blank"
            rel="noreferrer"
          >
            ул. „Екзарх Йосиф“ 6
            <br />
            4400 Пазарджик
          </a>
          <a href="tel:+359879605623">0879 605 623</a>
          <a href="mailto:mdom@pazardjik.bg">mdom@pazardjik.bg</a>
        </div>
        <div className="footer-social">
          <p>{text.follow}</p>
          <div className="socials">
            <a
              href="https://www.facebook.com/youthhousepz/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <SocialIcon name="facebook" />
            </a>
            <a
              href="https://www.instagram.com/youth_housepz/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <SocialIcon name="instagram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UClLPrv5fNhWBZBqQ5GDLlvw"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <SocialIcon name="youtube" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
