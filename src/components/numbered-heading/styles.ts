import { styled } from '@/styles'
import { animated } from 'react-spring'

export const NumberedHeadingWrap = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: 20
})

export const NumberedHeadingNumber = styled(animated.small)(({ theme }) => ({
  fontSize: '.875rem',
  fontWeight: 'bold',
  'html[dir=ltr] &': { marginRight: '.5rem' },
  'html[dir=rtl] &': { marginLeft: '.5rem' },
  color: theme.colors.deemphasized
}))

export const NumberedHeadingTitle = styled(animated.h3)(({ theme }) => ({
  fontSize: '1.75rem',
  color: theme.colors.emphasized
}))
