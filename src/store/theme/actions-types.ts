import { ThemeState } from './types'

interface SetTheme extends ThemeState {
  type: 'SET_THEME'
}

export type ThemeAction = SetTheme
