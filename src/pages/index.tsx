import Container from '@/components/Container'
import type { NextPage } from 'next'
import GeneralInfoCard from '@/components/GeneralInfoCard'
import KeySkillsCard from '@/components/KeySkillsCard'
import LanguagesCard from '@/components/LanguagesCard'
import SkillsSummaryCard from '@/components/SkillsSummaryCard'
import { data } from '@/data/enData'
import styles from '@/styles/home.module.scss'

const IndexPage: NextPage = () => (
  <Container className={styles.root}>
    <GeneralInfoCard data={data.generalInfoCardData} />
    <KeySkillsCard data={data.keySkillsCardData} />
    <LanguagesCard data={data.languagesCardData} />
    <SkillsSummaryCard data={data.skillsSummaryCardData} />
  </Container>
)

export default IndexPage
