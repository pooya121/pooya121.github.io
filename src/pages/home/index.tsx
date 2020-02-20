import { Container } from '@/components/styled'
import Heads from '@/components/heads'

import HomeHeader from './home-header'
import SkillsSection from './skills-section'
import XpSection from './xp-section'
import PersonalInfoSection from './personal-info-section'
import ProfilesSection from './profiles-section'
import { useLocale } from '@/util/hooks'
import SvgDefs from '@/styles/svg-defs'

const Home = () => {
  const { page } = useLocale()
  return (
    <Container>
      <SvgDefs />
      <Heads title={page.title} description={page.description} />
      <HomeHeader />
      <main>
        <PersonalInfoSection />
        <SkillsSection />
        <XpSection />
        <ProfilesSection />
      </main>
    </Container>
  )
}

export default Home
