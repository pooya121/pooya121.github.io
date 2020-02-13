import React from 'react'

import { ButtonWrap } from './styles'

type HTMLButtonProp = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const StylishButton: React.FC<HTMLButtonProp> = props => {
  return <ButtonWrap {...props} />
}

export default StylishButton
