import { styled } from '@/styles'
import { animated } from 'react-spring'

export const HomeSectionWrap = 'section'
export const HomeSectionBorder = styled(animated.i)(({ theme }) => ({
  width: 0,
  height: 1,
  backgroundColor: theme.colors.deemphasized,
  marginBottom: 25,
  marginTop: 25,
  display: 'block'
}))
