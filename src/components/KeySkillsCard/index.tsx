import { memo } from 'react'
import type { FC } from 'react'
import Card from '../Card'
import styles from './styles.module.scss'

export interface KeySkillsCardData {
  title: string
  skills: string[]
}

interface KeySkillsCardProps {
  data: KeySkillsCardData
  children?: never
}

const KeySkillsCard: FC<KeySkillsCardProps> = ({ data }) => (
  <Card title={data.title} className={styles.root}>
    <ul className={styles.list}>
      {data.skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </Card>
)

export default memo(KeySkillsCard)
