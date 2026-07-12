import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { en } from './locales/en'
import { az } from './locales/az'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      az: { translation: az },
    },
    fallbackLng: 'az',
    supportedLngs: ['en', 'az'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
  })

const applyLang = (lng: string) => {
  if (typeof document !== 'undefined') document.documentElement.lang = lng
}
applyLang(i18n.resolvedLanguage ?? 'az')
i18n.on('languageChanged', applyLang)

export default i18n
