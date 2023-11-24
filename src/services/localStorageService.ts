const localStorageService = () => {
  const setBoolean = (key: string, val: boolean) => {
    return setValue(key, val.toString())
  }

  const setValue = <T>(key: string, value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      return false
    }
  }

  const getNumber = (key: string): number | undefined => {
    const val = getValue<number>(key)
    if (val) {
      return Number(val)
    }
    return undefined
  }

  const getBoolean = (key: string): boolean | undefined => {
    const val = getValue<string>(key)
    if (val) {
      return val.toLowerCase() === 'true'
    }
    return undefined
  }

  const getValue = <T>(key: string): T | null => {
    try {
      const val = localStorage.getItem(key)
      if (val) {
        return JSON.parse(val) as T
      }
      return null
    } catch (e) {
      return null
    }
  }

  const getValueDefaulted = <T>(key: string, defaultValue: string): T => {
    try {
      const val = localStorage.getItem(key)
      if (val) {
        return JSON.parse(val) as T
      }
      return defaultValue as T
    } catch (e) {
      return defaultValue as T
    }
  }

  const remove = (key: string) => {
    localStorage.removeItem(key)
  }

  return {
    getNumber,
    getBoolean,
    getValue,
    getValueDefaulted,
    setValue,
    setBoolean,
    remove
  }
}

export default localStorageService
