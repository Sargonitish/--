import type { Metadata, Viewport } from "next";
import "./studio.css";

const SITE = "http://nitishportfolio.xo.je";
const TITLE = "Nitish S — Engineering Student & Web Developer";
const DESC =
  "Results-driven Engineering student with hands-on experience in web development, software design, and AI-driven innovation. Building student portfolios, scalable applications, and practical tech solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: TITLE, template: "%s | Nitish S" },
  description: DESC,
  applicationName: "Nitish S",
  authors: [{ name: "Nitish S", url: SITE }],
  creator: "Nitish S",
  keywords: [
    "Nitish S", "Nitish", "engineering student Chennai", "freelance portfolio developer", "student portfolio developer",
    "web developer Chennai", "Python developer", "Java developer", "AI for education", "Tagore Engineering College", "portfolio",
  ],
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Nitish S",
    title: TITLE,
    description: DESC,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#f9e2e1", width: "device-width", initialScale: 1 };

// Structured data so search engines understand who this is and what is on offer.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Nitish S",
      alternateName: "sargonitish",
      url: SITE,
      image: `${SITE}/opengraph-image.png`,
      email: "mailto:nitiships14@gmail.com",
      telephone: "+91-6369393673",
      jobTitle: "Engineering Student & Web Developer",
      address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "TN", addressCountry: "IN" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Tagore Engineering College" },
        { "@type": "EducationalOrganization", name: "Prince Matriculation Higher Secondary School" },
      ],
      knowsAbout: ["Python", "Java", "C++", "C", "JavaScript", "HTML5", "CSS3", "MySQL", "MongoDB", "Cloud Computing", "AI Solutions"],
      sameAs: [
        "https://github.com/Sargonitish",
        "https://www.linkedin.com/in/nitish-ping-perfect",
        "http://nitishportfolio.xo.je/",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#service`,
      name: "Nitish S — Portfolio & Web Development",
      url: SITE,
      provider: { "@id": `${SITE}/#person` },
      areaServed: "Worldwide",
      description: DESC,
      serviceType: ["Portfolio Website Development", "Frontend Web Development", "AI in Education Solutions", "Software Engineering"],
    },
    { "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE, name: "Nitish S", inLanguage: "en", publisher: { "@id": `${SITE}/#person` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
