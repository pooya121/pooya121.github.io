import { styled, EmotionThemeModel } from '@/styles'
import { css } from '@emotion/core'

export const getButtonStyles = ({ colors }: EmotionThemeModel, mode: 'button' | 'anchor') => {
  const coreColor = mode === 'button' ? colors.emphasized : colors.primary
  return css({
    backgroundColor: 'transparent',
    color: coreColor,
    border: `1px solid ${coreColor}`,
    padding: '.25em .5em',
    minWidth: '7em',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    transition: '.15s ease',
    ':after,:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '50%',
      backgroundColor: coreColor,
      transition: '.3s ease-out',
      zIndex: -1
    },
    ':after': {
      left: '100%'
    },
    ':before': {
      right: '100%'
    },
    ':hover': {
      color: colors.mainBackground,
      ':before': {
        right: '50%'
      },
      ':after': {
        left: '50%'
      }
    }
  })
}

export const ButtonWrap = styled.button(({ theme }) => getButtonStyles(theme, 'button'))
