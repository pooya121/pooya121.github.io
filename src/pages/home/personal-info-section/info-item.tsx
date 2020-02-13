import { Anchor } from '@/components/styled'

import { InfoItemInner, InfoItemKey, InfoItemValue, StyledArrowIcon } from './styles'
import { useSpring } from 'react-spring'

interface Props {
  children?: never
  itemKey: string
  itemValue: string
  href?: string
  /** starts from 0 */
  index: number
  ltr?: boolean
}

const InfoItem: React.FC<Props> = ({ itemKey, itemValue, href, index, ltr = false }) => {
  const wrapperStyle = useSpring({
    delay: index * 150,
    from: { opacity: 0, transform: 'translateY(-15%)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  })
  return (
    <InfoItemInner style={wrapperStyle}>
      <StyledArrowIcon />
      <InfoItemKey>{itemKey} : </InfoItemKey>
      <InfoItemValue css={ltr ? { direction: 'ltr' } : undefined}>
        {href ? <Anchor href={href}>{itemValue}</Anchor> : itemValue}
      </InfoItemValue>
    </InfoItemInner>
  )
}

export default InfoItem
