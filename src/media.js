export function media(src) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${src}`;
}
