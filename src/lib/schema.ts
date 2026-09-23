import { site } from '../data/site';
import type { Locale } from '../i18n';
import type { LocaleContent } from '../data/content';

/** ページの構造化データをまとめて生成（TouristAttraction + FAQPage + BreadcrumbList）。 */
export function buildJsonLd(locale: Locale, c: LocaleContent, pageUrl: string) {
  const attraction = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${site.domain}/#attraction`,
    name: site.name,
    alternateName: site.nameEn,
    description: c.hero.lead,
    url: pageUrl,
    image: site.domain + site.ogImage,
    address: {
      '@type': 'PostalAddress',
      postalCode: site.postalCode,
      addressRegion: site.addressRegion,
      addressLocality: site.addressLocality,
      streetAddress: site.streetAddress
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude
    },
    telephone: site.phone,
    isAccessibleForFree: true,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '06:00',
        closes: '22:00'
      }
    ],
    hasMap: site.mapsUrl,
    sameAs: [site.officialUrl, site.mapsUrl]
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: site.name,
        item: pageUrl
      }
    ]
  };

  return [attraction, faqPage, breadcrumb];
}
