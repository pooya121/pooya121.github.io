import { memo } from 'react'
import type { FC } from 'react'
import Card from '../Card'
import ResetLI from '../ResetElements/ResetLI'
import ResetUL from '../ResetElements/ResetUL'
import styles from './styles.module.scss'

export interface KeySkillsCardData {
  title: string
  skills: string[]
}

export interface KeySkillsCardProps {
  data: KeySkillsCardData
  children?: never
}

const KeySkillsCard: FC<KeySkillsCardProps> = ({ data }) => (
  <Card title={data.title} className={styles.root}>
    <ResetUL className={styles.list}>
      {data.skills.map((skill) => (
        <ResetLI key={skill}>{skill}</ResetLI>
      ))}
    </ResetUL>
  </Card>
)

export default memo(KeySkillsCard)
