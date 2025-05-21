export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Dream Big Educational Consultancy",
    "url": "https://www.dreambig.com.np",
    "description": "Empowering Nepalese students to dream big and study abroad.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NP"
    }
  };

  return (
    <>
      <title>Dream Big Educational Consultancy</title>
      <meta name="description" content="Empowering Nepalese students to dream big and study abroad." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
