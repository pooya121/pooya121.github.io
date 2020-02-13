import { useSpring } from 'react-spring'
import { useState } from 'react'

import NumberedHeading from '@/components/numbered-heading'

import HomeSectionLayout from '../home-section-layout'
import { XpUL } from './styles'
import XpItem from './xp-item'
import { useLocale } from '@/util/hooks'

interface Props {
  children?: never
}

const XpSection: React.FC<Props> = () => {
  const { experience } = useLocale()
  const [isSpringFinished, setIsSpringFinished] = useState(false)
  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    onRest() {
      setIsSpringFinished(true)
    },
    delay: 2500
  })
  return (
    <HomeSectionLayout index={2}>
      <NumberedHeading index={2}>{experience.title}</NumberedHeading>
      <XpUL data-disable-actions={!isSpringFinished} style={springProps}>
        {experience.items.map(({ startDate, endDate, name, url, images, role }, i) => (
          <XpItem
            key={i}
            companyName={name}
            companyHref={url}
            devRole={role}
            startDate={startDate}
            endDate={endDate}
            images={images}
          />
        ))}
      </XpUL>
    </HomeSectionLayout>
  )
}

export default XpSection
