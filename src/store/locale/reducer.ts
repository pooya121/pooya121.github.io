import { Reducer } from 'redux'

import { LocaleState } from './types'
import { LocaleAction } from './actions-types'

/** it has to be dispatched in get initialData */
export const localeReducer: Reducer<LocaleState, LocaleAction> = (
  state = {} as LocaleState,
  action
) => {
  switch (action.type) {
    case 'SET_LOCALE':
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { type, ...locale } = action
      return locale
    default:
      return state
  }
}
