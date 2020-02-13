import { useRef } from 'react'
import { useSelector } from 'react-redux'

type StoreState = import('@/store').StoreState
const notSetSymbol = Symbol('not set')

export function useInstance<T>(fn: () => T) {
  const ref = useRef(notSetSymbol)
  if (ref.current === notSetSymbol) {
    ref.current = fn() as any
  }
  return (ref.current as any) as T
}

export function useLocale() {
  const locale = useSelector((state: StoreState) => state.locale)
  return locale
}
