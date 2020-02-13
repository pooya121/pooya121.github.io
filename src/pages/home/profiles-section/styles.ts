import { styled } from '@/styles'
import { Anchor } from '@/components/styled'
import { animated } from 'react-spring'

export const ProfileListItem = styled.li<{ 'data-disable-actions': boolean }>(
  ({ 'data-disable-actions': disableActions }) => ({
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
    ...(disableActions && { userSelect: 'none', a: { pointerEvents: 'none' } })
  })
)

export const ProfileItemIconWrap = styled(animated.div)(({ theme }) => ({
  color: theme.colors.emphasized,
  fontSize: 20,
  svg: {
    display: 'block'
  },
  'html[dir=ltr] &': { marginRight: 15 },
  'html[dir=rtl] &': { marginLeft: 15 },
  '@media (max-width: 500px)': {
    fontSize: 15,
    'html[dir=ltr] &': { marginRight: 10 },
    'html[dir=rtl] &': { marginLeft: 10 }
  }
}))

export const ProfileItemName = styled(animated.strong)(({ theme }) => ({
  fontSize: '1.0625rem',
  color: theme.colors.emphasized,
  minWidth: '5rem',
  'html[dir=ltr] &': { marginRight: 20 },
  'html[dir=rtl] &': { marginLeft: 20 },
  '@media (max-width: 500px)': {
    fontSize: '.875em',
    minWidth: '0',
    'html[dir=ltr] &': { marginRight: 10 },
    'html[dir=rtl] &': { marginLeft: 10 }
  }
}))

export const ProfileItemAnchor = styled(Anchor)({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  maxWidth: '100%',
  '@media (max-width: 500px)': {
    fontSize: '.75em'
  }
})

export const ProfileItemAnchorWrap = styled(animated.div)({
  flex: 1,
  display: 'flex',
  overflow: 'hidden'
})
