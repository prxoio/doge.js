export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "doge.js",
  description:
    "Repository of dog breeds.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  { 
    title: "Breeds",
    href: "/breeds",
  },
  {
    title: "API Docs",
    href: "https://github.com/prxoio/doge.js?tab=readme-ov-file#dog-breeds-api-documentation",
  }
  ],
  links: {
    twitter: "https://inv3nt.dev",
    github: "https://github.com/prxoio/doge.js",
    docs: "https://inv3nt.dev",
  },
}
 