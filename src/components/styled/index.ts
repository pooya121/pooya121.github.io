import { styled, EmotionThemeModel } from '@/styles'

export const Container = styled.div({
  maxWidth: 1000,
  padding: `50px 15px 25px 15px`,
  width: '100%',
  margin: '0 auto '
})

export const getAnchorStyles = (theme: EmotionThemeModel) => ({
  color: theme.colors.primary,
  ':hover': {
    color: theme.colors.primaryAlt,
    textDecoration: 'underline'
  },
  '@media print': {
    color: 'inherit'
  }
})

export const Anchor = styled.a(({ theme }) => getAnchorStyles(theme))
