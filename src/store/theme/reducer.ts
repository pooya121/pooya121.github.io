import { Reducer } from 'redux'

import { ThemeState } from './types'
import { setDefaultTheme, darkTheme } from './themes'
import { ThemeAction } from './actions-types'

export const themeReducer: Reducer<ThemeState, ThemeAction> = (state = darkTheme, action) => {
  switch (action.type) {
    case 'SET_THEME': {
      const theme = { name: action.name, colors: action.colors }
      setDefaultTheme(theme)
      return theme
    }
    default:
      return state
  }
}
