import { type ThemeDefinition } from 'vuetify'
// services
import localStorageService from '@/services/localStorageService'
import { getColor, semanticColors } from '@/styling/colors'

export const DEFAULT_THEME_COLOR = 'blue'
export const THEME_SETTING_LIGHT = 'light'
export const THEME_SETTING_DARK = 'dark'
export const DEFAULT_THEME_SETTING = THEME_SETTING_LIGHT

const storageService = localStorageService()
const themeSetting = storageService.getValueDefaulted<string>('theme', DEFAULT_THEME_SETTING)
const colorSetting = storageService.getValueDefaulted<string>('color', DEFAULT_THEME_COLOR)

const color = getColor(colorSetting)

export const themeCustom: ThemeDefinition = {
  dark: themeSetting === 'dark',
  themes: {
    light: {
      colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: color?.[800],
        'primary-darken-1': color?.[900],
        secondary: color?.[500],
        'secondary-darken-1': color?.[600],
        error: semanticColors.error[800],
        info: semanticColors.info[800],
        success: semanticColors.success[800],
        warning: semanticColors.warning[800]
      }
    },
    dark: {
      colors: {
        background: '#222222',
        surface: '#222222',
        primary: color?.[100],
        'primary-darken-1': color?.[200],
        secondary: color?.[300],
        'secondary-darken-1': color?.[400],
        error: semanticColors.error[800],
        info: semanticColors.info[800],
        success: semanticColors.success[800],
        warning: semanticColors.warning[800]
      }
    }
  }
}
