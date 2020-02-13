import { useTransition, config } from 'react-spring'

import NumberedHeading from '@/components/numbered-heading'

import SkillItem from './skill-item'
import { SkillUL, SkillListItem } from './styles'
import HomeSectionLayout from '../home-section-layout'
import { wait } from '@/util'
import { useLocale } from '@/util/hooks'

interface Props {
  children?: never
}

const SkillsSection: React.FC<Props> = () => {
  const { skills } = useLocale()
  const skillsTransition = useTransition(skills.items, ({ title }) => title, {
    trail: 800 / skills.items.length,
    from: { opacity: 0, transform: 'translateX(-15px)' },
    /**
     * this work around is used because in react springs v8 delay is not accepted as a parameter in useTransition
     * it will be fixed in v9
     */
    ['enter' as any]: () => async (next: any) => {
      await wait(1500)
      await next({ opacity: 1, transform: 'translateX(0px)' })
    },
    config: config.slow
  })
  return (
    <HomeSectionLayout index={1}>
      <NumberedHeading index={1}>{skills.title}</NumberedHeading>
      <SkillUL>
        {skillsTransition.map(({ item, key, props }) => (
          <SkillListItem style={props} key={key}>
            <SkillItem title={item.title} status={item.status} />
          </SkillListItem>
        ))}
      </SkillUL>
    </HomeSectionLayout>
  )
}

export default SkillsSection
