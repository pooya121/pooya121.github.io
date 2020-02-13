import { LocaleState } from './types'

interface SetLocale extends LocaleState {
  type: 'SET_LOCALE'
}

export type LocaleAction = SetLocale
