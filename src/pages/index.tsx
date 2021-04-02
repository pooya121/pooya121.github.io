import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@/components/Container'
import ExperienceCard from '@/components/ExperienceCard'
import GeneralInfoCard from '@/components/GeneralInfoCard'
import KeySkillsCard from '@/components/KeySkillsCard'
import LanguagesCard from '@/components/LanguagesCard'
import SkillsSummaryCard from '@/components/SkillsSummaryCard'
import { data } from '@/data/enData'
import styles from '@/styles/home.module.scss'

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>{data.head.title}</title>
      <meta name="description" content={data.head.description} />
    </Head>
    <Container className={styles.root}>
      <GeneralInfoCard data={data.generalInfo} />
      <SkillsSummaryCard data={data.skillsSummary} />
      <KeySkillsCard data={data.keySkills} />
      <ExperienceCard data={data.experience} />
      <LanguagesCard data={data.languages} />
    </Container>
  </>
)

export default IndexPage
