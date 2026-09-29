export function Icon({ name }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {shapes[name]}
    </svg>
  );
}

const shapes = {
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M3.5 19c.7-2.7 3-4.2 5.5-4.2S13.8 16.3 14.5 19" />
      <path d="M14.2 15.1c1.5-.5 3.3.1 4.3 1.7.5.8.9 1.6 1 2.2" />
    </>
  ),
  trophy: (
    <>
      <circle cx="12" cy="8" r="4.2" />
      <path d="m12 6.3.7 1.4 1.5.2-1.1 1 .3 1.5L12 9.7l-1.4.7.3-1.5-1.1-1 1.5-.2z" />
      <path d="M9 13.2 8 20h8l-1-6.8" />
    </>
  ),
  images: (
    <>
      <rect x="3" y="5" width="13" height="12" rx="2" />
      <circle cx="7.5" cy="9" r="1.1" />
      <path d="m6 15 2.4-2.3L11 15l1.6-1.5L16 16" />
      <path d="M16 8h3.2A1.8 1.8 0 0 1 21 9.8V19a2 2 0 0 1-2 2H9" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  phone: (
    <path d="M8 3.5h2.2l1.2 3.2-1.8 1.1a12 12 0 0 0 6.6 6.6l1.1-1.8 3.2 1.2V16a2 2 0 0 1-2.2 2A15 15 0 0 1 6 6.7 2 2 0 0 1 8 4.5v-1z" />
  ),
  music: (
    <>
      <path d="M9 18V6l10-2v10" />
      <circle cx="6.5" cy="18" r="2.4" />
      <circle cx="16.5" cy="16" r="2.4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.4 2.4 3.6 5 3.6 8s-1.2 5.6-3.6 8c-2.4-2.4-3.6-5-3.6-8s1.2-5.6 3.6-8z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" />
    </>
  ),
  bolt: <path d="M13 3 5.5 13H11l-1 8 8.5-11H13l0-7z" />,
  leaf: (
    <>
      <path d="M5 19C5 11 11.5 5 20 4 19 12.5 13 19 5 19z" />
      <path d="M8.5 15.5c2-2 4.2-4.6 6.3-7.5" />
    </>
  ),
  north: (
    <>
      <path d="M12 20V5" />
      <path d="m6.5 10 5.5-5.5L17.5 10" />
    </>
  ),
  peak: <path d="M3 19 9.2 7.5 13.5 14l2.6-3.6L21 19z" />,
  spark: <path d="m12 3 1.5 5.2L19 9.5l-4.6 2L13 17l-1.5-5.5L7 9.5l5.5-1.3z" />,
};
