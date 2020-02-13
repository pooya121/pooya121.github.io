import { styled } from '@/styles'
import { ArrowStartIcon } from '@/icons'
import { animated } from 'react-spring'

export const SkillListItem = styled(animated.li)({
  listStyle: 'none',
  width: '25%',
  paddingLeft: 15,
  paddingRight: 15,
  marginBottom: 15,
  '@media (max-width: 1000px)': {
    width: '33.3333%'
  },
  '@media (max-width: 800px)': {
    width: '50%'
  },
  '@media (max-width: 500px)': {
    width: '100%'
  }
})

export const SkillItemInner = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  fontSize: '.9375rem',
  '@media (max-width: 500px)': {
    ':before': {
      content: '""',
      height: 1,
      flex: 1,
      order: 2,
      backgroundColor: theme.colors.deemphasized,
      'html[dir=ltr] &': { marginLeft: '.5em' },
      'html[dir=rtl] &': { marginRight: '.5em' },
      opacity: '.2'
    }
  }
}))

export const StyledArrowIcon = styled(ArrowStartIcon)(({ theme }) => ({
  color: theme.colors.deemphasized
}))

export const SkillTitle = styled.span({
  'html[dir=ltr] &': { marginLeft: '.5em' },
  'html[dir=rtl] &': { marginRight: '.5em' },
  order: 1
})

export const SkillStatus = styled.small(({ theme }) => ({
  color: theme.colors.deemphasized,
  fontSize: '.875rem',
  'html[dir=ltr] &': { marginLeft: '.5em' },
  'html[dir=rtl] &': { marginRight: '.5em' },
  order: 3
}))

export const SkillUL = styled.ul({
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: `0 -15px 0 -15px`
})
