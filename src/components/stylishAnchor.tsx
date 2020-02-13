import React from 'react'

import { styled } from '@/styles'
import { getButtonStyles } from './stylish-button/styles'

const Anchor = styled.a(({ theme }) => getButtonStyles(theme, 'anchor'))

type HTMLAnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

const StylishAnchor: React.FC<HTMLAnchorProps> = props => {
  return <Anchor {...props} />
}

export default StylishAnchor
