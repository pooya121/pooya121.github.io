import { useState, useEffect, useContext, createContext } from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

interface Props {
  children?: never
  delay?: number
}

export const LoadingCloseContext = createContext<{ onClose?: () => void }>({})

const DelayedLoading: React.FC<Props> = ({ delay = 200 }) => {
  const { onClose } = useContext(LoadingCloseContext)
  const [canShow, setCanShow] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCanShow(true)
    }, delay)
    return () => clearTimeout(timeout)
  })
  if (!canShow) return null
  return (
    <div
      onClick={onClose}
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ClimbingBoxLoader color="#fff" size={20} />
    </div>
  )
}

export default DelayedLoading
