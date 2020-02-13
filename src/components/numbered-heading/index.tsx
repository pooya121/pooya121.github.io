import { useMemo } from 'react'
import { NumberedHeadingWrap, NumberedHeadingNumber, NumberedHeadingTitle } from './styles'
import { useSpring } from 'react-spring'
import { useLocale } from '@/util/hooks'
import { translateNumbers } from '@/util'

interface Props {
  index: number
  children: string
}

const NumberedHeading: React.FC<Props> = ({ index, children }) => {
  const { lang } = useLocale()
  const formatedNumber = useMemo(
    () => translateNumbers((index + 1).toString().padStart(2, '0'), lang),
    [index, lang]
  )
  const delay = index * 1000
  const numberProps = useSpring({
    delay,
    from: { opacity: 0, transform: 'scale(2)' },
    to: { opacity: 1, transform: 'scale(1)' }
  })
  const titleProps = useSpring({
    delay,
    from: { opacity: 0, transform: 'translateX(20px)' },
    to: { opacity: 1, transform: 'scale(0)' }
  })
  return (
    <NumberedHeadingWrap>
      <NumberedHeadingNumber style={numberProps}>{formatedNumber}</NumberedHeadingNumber>
      <NumberedHeadingTitle style={titleProps}>{children}</NumberedHeadingTitle>
    </NumberedHeadingWrap>
  )
}

export default NumberedHeading
