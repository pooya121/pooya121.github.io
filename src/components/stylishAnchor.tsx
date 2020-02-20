import React, { forwardRef } from 'react'

import { styled } from '@/styles'
import { getButtonStyles } from './stylish-button/styles'

const Anchor = styled.a(({ theme }) => getButtonStyles(theme, 'anchor'))

type HTMLAnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export default forwardRef<HTMLAnchorElement, HTMLAnchorProps>(function StylishAnchor(props, ref) {
  return <Anchor {...props} ref={ref} />
})
