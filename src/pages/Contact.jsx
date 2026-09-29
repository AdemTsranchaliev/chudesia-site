import { useState } from "react";
import { PageHero } from "../Layout.jsx";
import { Icon } from "../icons.jsx";

const facts = [
  {
    icon: "pin",
    label: "Адрес",
    value: "ул. „Екзарх Йосиф“ 6, Пазарджик",
    href: "https://www.google.com/maps/search/?api=1&query=42.1901654,24.3317225",
    external: true,
  },
  {
    icon: "phone",
    label: "Телефон",
    value: "0879 605 623",
    href: "tel:+359879605623",
  },
  {
    icon: "mail",
    label: "Имейл",
    value: "mdom@pazardjik.bg",
    href: "mailto:mdom@pazardjik.bg",
  },
  {
    icon: "globe",
    label: "Младежки дом",
    value: "mdompazardjik.com",
    href: "https://www.mdompazardjik.com/",
    external: true,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const age = String(data.get("age") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = [
      `Име: ${name}`,
      `Телефон: ${phone}`,
      age ? `Възраст на детето: ${age}` : "",
      "",
      message || "Здравейте, искаме да запишем дете в ПТС „Чудесия“.",
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:mdom@pazardjik.bg?subject=${encodeURIComponent(
      "Записване в ПТС „Чудесия“"
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHero
        kicker="Записване"
        title="Ела на репетиция"
        text="Записването минава през Младежки дом – Пазарджик. Напишете възрастта на детето и ще ви върнат към група и час."
      />
      <section className="section contact-page">
        <div className="contact-facts">
          {facts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <Icon name={item.icon} />
              <span>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </span>
            </a>
          ))}
        </div>
        <div className="contact-layout">
          <form className="card" onSubmit={onSubmit}>
            <h2>Запитване за група</h2>
            <label>
              Име на родител
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Телефон
              <input name="phone" required autoComplete="tel" type="tel" />
            </label>
            <label>
              Възраст на детето
              <input name="age" inputMode="numeric" placeholder="напр. 8" />
            </label>
            <label>
              Съобщение
              <textarea name="message" rows="4" />
            </label>
            <button className="btn btn-gold" type="submit">
              Изпрати запитване
            </button>
            {sent ? (
              <p className="form-note" role="status">
                Отваря се пощата ви с готово писмо до Младежкия дом.
              </p>
            ) : null}
          </form>
          <div className="contact-map">
            <iframe
              title="Карта на Младежки дом – Пазарджик"
              src="https://maps.google.com/maps?q=42.1901654,24.3317225&hl=bg&z=17&output=embed"
              loading="lazy"
            />
            <p>Репетициите са в Младежки дом. Осем групи, от около 5 до 18 години.</p>
          </div>
        </div>
      </section>
    </>
  );
}
