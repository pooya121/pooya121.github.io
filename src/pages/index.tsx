import Container from '@/components/Container'
import ExperienceCard from '@/components/ExperienceCard'
import GeneralInfoCard from '@/components/GeneralInfoCard'
import KeySkillsCard from '@/components/KeySkillsCard'
import LanguagesCard from '@/components/LanguagesCard'
import SkillsSummaryCard from '@/components/SkillsSummaryCard'
import { data } from '@/data/enData'
import styles from '@/styles/home.module.scss'

const IndexPage = () => (
  <Container className={styles.root}>
    <GeneralInfoCard data={data.generalInfoCardData} />
    <KeySkillsCard data={data.keySkillsCardData} />
    <LanguagesCard data={data.languagesCardData} />
    <SkillsSummaryCard data={data.skillsSummaryCardData} />
    <ExperienceCard data={data.experienceCardData} />
  </Container>
)

export default IndexPage
