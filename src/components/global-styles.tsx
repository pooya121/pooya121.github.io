import React from 'react'
import { Global } from '@emotion/core'
import { useTheme } from '@/styles'

interface Props {
  children?: never
}

const GlobalStyles: React.FC<Props> = () => {
  const { colors, dir } = useTheme()
  return (
    <Global
      styles={{
        '::selection': {
          color: colors.mainBackground,
          backgroundColor: colors.emphasized
        },
        body: {
          backgroundColor: colors.mainBackground,
          color: colors.defaultText,
          direction: dir as 'ltr' | 'rtl',
          textAlign: dir === 'ltr' ? 'left' : 'right'
        }
      }}
    />
  )
}

export default GlobalStyles
