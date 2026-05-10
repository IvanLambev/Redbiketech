import type { Metadata } from "next"

export const siteConfig = {
  name: "Redbike Tech",
  url: getSiteUrl(),
  defaultTitle: "Document Search for Accountants | Redbike Tech",
  bookingUrl: "https://calendly.com/redbiketech/30min",
  bookingEmbedUrl:
    "https://calendly.com/redbiketech/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=c21725",
  description:
    "Secure document retrieval for accounting firms. Find client tax files, source answers, and reclaim billable time without digging through folders.",
  socialImage: "/opengraph-image",
  twitterImage: "/twitter-image",
  keywords: [
    "document retrieval for accountants",
    "file search for accounting firms",
    "secure tax document search",
    "CPA document automation",
    "private accounting file search",
    "client file search",
  ],
}

type PageMetadataOptions = {
  title: string
  description: string
  path: `/${string}`
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const pageTitle = `${title} | ${siteConfig.name}`

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      images: [
        {
          url: siteConfig.socialImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [siteConfig.twitterImage],
    },
  }
}

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/redbiketech-logo.png`,
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#software`,
        name: siteConfig.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: siteConfig.description,
        url: siteConfig.url,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  }
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
