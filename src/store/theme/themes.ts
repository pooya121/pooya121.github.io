import { ThemeState } from './types'

export const darkTheme: ThemeState = {
  name: 'dark',
  colors: {
    mainBackground: '#242424',
    defaultText: '#a0a0a0',
    emphasized: '#dbdbdb',
    deemphasized: '#5d5d5d',
    primary: '#FCB667',
    primaryAlt: '#F9F871'
  }
}

export const lightTheme: ThemeState = {
  name: 'light',
  colors: {
    mainBackground: 'hsl(0,0%,97%)',
    defaultText: 'hsl(0,0%,30%)',
    emphasized: '#000',
    deemphasized: 'hsl(0,0%,33%)',
    primary: '#845EC2',
    primaryAlt: '#D65DB1'
  }
}

const THEME_LOCALSTORAGE_KEY = 'THEME_LOCALSTORAGE_KEY'
export const getDefaultTheme = () => {
  if (typeof window === 'undefined') return darkTheme
  const localStorageTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY)
  return localStorageTheme ? (JSON.parse(localStorageTheme) as ThemeState) : darkTheme
}
export const setDefaultTheme = (theme: ThemeState) => {
  if (typeof window === 'undefined') return
  localStorage.setItem(THEME_LOCALSTORAGE_KEY, JSON.stringify(theme))
}
