import i18n from "i18next"
import detector from "i18next-browser-languagedetector"
import { reactI18nextModule } from "react-i18next"

import translationEN from './locales/en/translation.json'
import translationZH from './locales/zh/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  }
}

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    detection: {
      lookupQuerystring: 'locale',
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })
  
  export default i18n;