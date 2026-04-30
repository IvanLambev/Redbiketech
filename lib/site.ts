export const siteConfig = {
  name: "Redbike Tech",
  url: getSiteUrl(),
  description:
    "Secure document retrieval for accounting firms. Find client tax files, source answers, and reclaim billable time without digging through folders.",
  keywords: [
    "document retrieval for accountants",
    "file search for accounting firms",
    "secure tax document search",
    "CPA document automation",
    "private accounting file search",
    "client file search",
  ],
}

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL)
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return normalizeUrl(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
  }

  if (process.env.VERCEL_URL) {
    return normalizeUrl(`https://${process.env.VERCEL_URL}`)
  }

  return "https://redbiketech.com"
}

function normalizeUrl(url: string) {
  return url.replace(/\/$/, "")
}
