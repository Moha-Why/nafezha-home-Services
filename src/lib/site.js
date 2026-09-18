export const SITE_URL = "https://nafezha-home-services.vercel.app"

export function prettySlug(slug) {
  return decodeURIComponent(slug || "").replace(/-/g, " ").trim()
}
