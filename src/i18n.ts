export const locales = ['ja', 'zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ja';

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string }> = {
  ja: { htmlLang: 'ja', ogLocale: 'ja_JP' },
  zh: { htmlLang: 'zh-Hant', ogLocale: 'zh_TW' },
  en: { htmlLang: 'en', ogLocale: 'en_US' }
};

/** Path (with trailing slash) for a given locale's homepage/section. */
export function localizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return path === '/' ? `/${locale}/` : `/${locale}${path}`;
}

/** hreflang alternate links for the current page. x-default points to the default locale. */
export function hreflangAlternates(path: string, site: string): { hreflang: string; href: string }[] {
  const base = site.replace(/\/$/, '');
  const map: Record<Locale, string> = {
    ja: `${base}/`,
    zh: `${base}/zh/`,
    en: `${base}/en/`
  };
  return [
    { hreflang: 'ja', href: map.ja },
    { hreflang: 'zh-Hant', href: map.zh },
    { hreflang: 'en', href: map.en },
    { hreflang: 'x-default', href: map.ja }
  ];
}

/** 言語別のタイトル／ディスクリプション（CTR 向けに高露出キーワードを含む）。 */
export const pageMeta: Record<Locale, { title: string; description: string }> = {
  ja: {
    title: '福山城公園｜福山駅から徒歩5分の観光スポット・歴史と四季の見どころ',
    description:
      'JR福山駅北口から徒歩約5分。福山城公園の見どころ、桜の見頃、天守と伏見櫓の歴史、開園・入館料、駐車場、アクセス、福山駅周辺の観光スポットをご案内。福山観光の拠点に最適な駅前の城です。'
  },
  zh: {
    title: '福山城公園｜從福山站步行5分鐘的景點・歷史與四季看點',
    description:
      '從JR福山站北口步行約5分鐘。為您介紹福山城公園的看點、櫻花最佳觀賞期、天守與伏見櫓的歷史、開園與入館費、停車場、交通，以及福山站周邊的景點。是福山觀光據點的首選車站前城堡。'
  },
  en: {
    title: 'Fukuyama Castle Park｜5 min from Fukuyama Station · History & Four Seasons',
    description:
      'About a 5-minute walk from JR Fukuyama Station North Exit. Highlights of Fukuyama Castle Park, cherry-blossom timing, the history of the keep and Fushimi Turret, hours and admission, parking, access, and spots near the station. The castle by the station is the perfect base for Fukuyama sightseeing.'
  }
};
