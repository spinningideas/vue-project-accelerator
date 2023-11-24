import type Language from '@/models/Language'

const supportedLanguageMap: Language[] = [
  { localeCode: 'enUS', text: 'English' },
  { localeCode: 'zhCN', text: 'Chinese' },
  { localeCode: 'esES', text: 'Spanish' }
]

const localizationService = () => {
  const defaultLocale = 'enUS'

  const getLocales = () => {
    return supportedLanguageMap
  }

  const getUserLocale = () => {
    let locale = window.localStorage.getItem('locale')
    if (locale) {
      return locale
    }
    return defaultLocale
  }

  const setUserLocale = (loc: string) => {
    window.localStorage.setItem('locale', loc)
  }

  const getCurrentLocale = () => {
    let found: any = []
    if (found.length === 0) {
      return getUserLocale()
    }
    return found[0]
  }

  const getLocalizedTextSet = async (keys: string[], locale: string) => {
    // async import the locale file for given locale
    // and extract the set of localized text values for given keys
    let textSet: any = {}
    const localizedData = await getLocalizedData(locale)
    if (localizedData) {
      let localizedTextSet = localizedData
      const keysLocalizedTextSet = Object.keys(localizedTextSet)
      for (const desiredKey of keys) {
        for (const key of keysLocalizedTextSet) {
          if (desiredKey === key) {
            textSet[key] = localizedTextSet[key]
          }
        }
      }
    }
    return textSet
  }

  const getLocalizedData = async (localeCode: string) => {
    // get data from folder in public by locale using fetch
    const localizedDataFilePath = `/i18n/${localeCode}.json`
    return fetch(localizedDataFilePath)
      .then((response) => {
        return response.json()
      })
      .catch((err) => {
        let msg = 'Error Reading data ' + err
        return { message: msg }
      })
  }

  return {
    setUserLocale,
    getUserLocale,
    getLocales,
    getCurrentLocale,
    getLocalizedTextSet
  }
}

export default localizationService
