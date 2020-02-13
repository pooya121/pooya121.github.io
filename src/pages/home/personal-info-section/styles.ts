import { styled } from '@/styles'
import { animated } from 'react-spring'
import { ArrowStartIcon } from '@/icons'

export const InfoList = styled.ul({
  fontSize: '.9375rem',
  padding: 0,
  margin: 0
})
export const InfoItemInner = styled(animated.li)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 10
})
export const InfoItemKey = styled.strong({
  'html[dir=ltr] &': {
    marginLeft: '.5rem'
  },
  'html[dir=rtl] &': {
    marginRight: '.5rem'
  }
})
export const InfoItemValue = styled.span({
  margin: 0,
  'html[dir=ltr] &': {
    marginLeft: '.5rem'
  },
  'html[dir=rtl] &': {
    marginRight: '.5rem'
  }
})
export const StyledArrowIcon = styled(ArrowStartIcon)(({ theme }) => ({
  color: theme.colors.deemphasized
}))
