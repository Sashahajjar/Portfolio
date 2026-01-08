export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sacha Hajjar",
    jobTitle: "Ingénieure en numérique",
    description:
      "Ingénieure en numérique diplômée de l'ISEP, spécialisée en génie logiciel. Passionnée par le développement web et l'analyse de données.",
    url: "https://sachahajjar.vercel.app",
    email: "hajjarsacha@gmail.com",
    telephone: "+33 7 66 78 71 57",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "ISEP, Grande École d'ingénieurs du numérique",
    },
    knowsAbout: [
      "Développement web",
      "Génie logiciel",
      "Analyse de données",
      "React.js",
      "Next.js",
      "PHP Symfony",
      "PostgreSQL",
      "Python",
    ],
    sameAs: [
      "https://www.linkedin.com/in/sasha-hajjar-026122230",
      "https://github.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

