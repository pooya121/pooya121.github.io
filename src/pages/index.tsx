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
    <SkillsSummaryCard data={data.skillsSummary} />
    <KeySkillsCard data={data.keySkills} />
    <ExperienceCard data={data.experience} />
    <LanguagesCard data={data.languages} />
  </Container>
)

export default IndexPage
