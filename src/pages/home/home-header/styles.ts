import { styled } from '@/styles'
import { animated } from 'react-spring'
import { getAnchorStyles } from '@/components/styled'
import { GithubIcon } from '@/icons'

export const GithubAnchor = styled(animated.a)(({ theme }) => ({
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  ...getAnchorStyles(theme),
  '@media print': {
    display: 'none'
  }
}))

export const StyledGithubIcon = styled(GithubIcon)({
  'html[dir=ltr] &': { marginLeft: '0.25rem' },
  'html[dir=rtl] &': { marginRight: '0.25rem' }
})

export const EndContentWrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignSelf: 'stretch',
  alignItems: 'flex-end',
  '@media (max-width: 500px)': {
    alignItems: 'center',
    marginTop: 30,
    width: '100%'
  },
  'html[dir=ltr] &': {
    marginLeft: 'auto'
  },
  'html[dir=rtl] &': {
    marginRight: 'auto'
  }
})

export const HeaderWrap = styled.header({
  marginBottom: 40,
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap'
})
