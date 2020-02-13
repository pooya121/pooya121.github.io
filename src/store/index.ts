import { createStore, combineReducers } from 'redux'
import { themeReducer } from './theme'
import { localeReducer } from './locale'

import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({ theme: themeReducer, locale: localeReducer })

/** @todo type check fix */
export function makeStore(initialState: any = {}) {
  return createStore(rootReducer, initialState, composeWithDevTools())
}

export type Store = ReturnType<typeof makeStore>
export type StoreState = ReturnType<Store['getState']>
export type StoreDispatch = Store['dispatch']
