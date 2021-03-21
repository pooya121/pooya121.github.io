import type { NextPage } from 'next'
import Container from '@/components/Container'
import ExperienceCard from '@/components/ExperienceCard'
import GeneralInfoCard from '@/components/GeneralInfoCard'
import KeySkillsCard from '@/components/KeySkillsCard'
import LanguagesCard from '@/components/LanguagesCard'
import SkillsSummaryCard from '@/components/SkillsSummaryCard'
import { data } from '@/data/enData'
import styles from '@/styles/home.module.scss'

const IndexPage: NextPage = () => (
  <Container className={styles.root}>
    <GeneralInfoCard data={data.generalInfo} />
    <KeySkillsCard data={data.keySkills} />
    <LanguagesCard data={data.languages} />
    <SkillsSummaryCard data={data.skillsSummary} />
    <ExperienceCard data={data.experience} />
  </Container>
)

export default IndexPage
