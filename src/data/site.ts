import type { Locale } from '../i18n';

/** 站点事实的唯一来源（语言中立，所有地区共用）。 */
export const site = {
  domain: 'https://fukuyamacastlepark.com',
  name: '福山城公園',
  nameEn: 'Fukuyama Castle Park',
  postalCode: '720-0061',
  addressRegion: '広島県',
  addressLocality: '福山市',
  streetAddress: '丸之内一丁目8番',
  geo: { latitude: 34.4904281, longitude: 133.3614081 },
  phone: '+81-84-928-1095',
  mapsUrl:
    'https://www.google.com/maps/place/Fukuyama+Castle+Park/data=!4m7!3m6!1s0x355110e4e170c8e3:0xbb00949ae035b0aa!8m2!3d34.4904281!4d133.3614081!16s%2Fg%2F1tfpgmgn!19sChIJ48hw4eQQUTURqrA14JqUALs?authuser=0&hl=ja&rclk=1',
  officialUrl: 'https://fukuyamajo.jp/',
  heroImage: '/images/fukuyama-castle-sunset.jpg',
  ogImage: '/images/fukuyama-castle-sunset.jpg'
} as const;

/** 营业时间（语言中立，结构化数据用）。 */
export const hours = {
  park: { opens: '06:00', closes: '22:00' },
  museum: { opens: '09:00', closes: '17:00', lastEntry: '16:30' }
} as const;

export const gaId = 'G-HXM22WWPKP';

/** 駅からの所要時間など、多言語で共用する短い事実ラベル。 */
export const facts = {
  accessValue: { ja: '福山駅北口<br />徒歩 約5分', zh: 'JR福山站北口<br />步行 約5分', en: 'JR Fukuyama Stn. North<br />5-min walk' },
  parkValue: { ja: '6:00–22:00', zh: '6:00–22:00', en: '6:00–22:00' },
  museumValue: { ja: '9:00–17:00', zh: '9:00–17:00', en: '9:00–17:00' }
} as const;

export function pick<T>(locale: Locale, ja: T, zh: T, en: T): T {
  return locale === 'ja' ? ja : locale === 'zh' ? zh : en;
}
