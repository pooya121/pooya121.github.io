import { useRef } from 'react'
import type { NextPage } from 'next'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import init from '@/three.js/gettingStarted'

const GettingStarted: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null)
  useIsomorphicLayoutEffect(() => init(ref.current!), [])
  return <div ref={ref} />
}

export default GettingStarted
