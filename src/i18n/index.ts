import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { LANGUAGES, FALLBACK_LANG, DEFAULT_NS } from './config'

export { LANGUAGES, FALLBACK_LANG, DEFAULT_NS }
export { COOKIE_NAME, HEADER_NAME } from './config'

if (!i18next.isInitialized) {
  i18next
    .use(resourcesToBackend((language: string, namespace: string) => {
      return import(`../locales/${language}/${namespace}.json`)
    }))
    .init({
      supportedLngs: LANGUAGES,
      fallbackLng: FALLBACK_LANG,
      lng: FALLBACK_LANG,
      fallbackNS: DEFAULT_NS,
      defaultNS: DEFAULT_NS,
      interpolation: {
        escapeValue: false,
      },
    })
}

export default i18next