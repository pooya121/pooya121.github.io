import { styled } from '@/styles'
import { animated } from 'react-spring'

export const XpUL = styled(animated.ul)<{ 'data-disable-actions': boolean }>(
  ({ 'data-disable-actions': disableActions }) => ({
    margin: 0,
    padding: 0,
    fontSize: '.875rem',
    ...(disableActions && {
      userSelect: 'none',
      'a,button': {
        pointerEvents: 'none'
      }
    })
  })
)

export const XpListItem = styled.li(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  marginBottom: 12,
  ':before': {
    content: '""',
    width: 7,
    height: 7,
    borderRadius: '50%',
    backgroundColor: theme.colors.deemphasized,
    'html[dir=ltr] &': { marginRight: 10 },
    'html[dir=rtl] &': { marginLeft: 10 }
  },
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '&:before': {
      content: 'none'
    }
  }
}))

export const XpItemDateRange = styled.span({
  'html[dir=ltr] &': { marginRight: 20 },
  'html[dir=rtl] &': { marginLeft: 20 },
  minWidth: '11em'
})
export const XpItemRole = styled.span({
  ':before': {
    content: '"/"',
    marginRight: 8,
    marginLeft: 8
  }
})

export const XpItemDataWrap = styled.div({
  minWidth: '19em',
  'html[dir=ltr] &': { marginRight: 10 },
  'html[dir=rtl] &': { marginLeft: 10 }
})

export const GalleryButtonWrap = styled(animated.div)({
  '@media print': {
    display: 'none'
  },
  '@media (max-width: 600px)': {
    marginTop: 5,
    marginBottom: 20
  }
})
