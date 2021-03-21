import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Card from '../Card'
import styles from './styles.module.scss'

export interface ExperienceCardData {
  items: ReactNode[]
}

interface ExperienceCardProps {
  data: ExperienceCardData
  children?: never
}

const ExperienceCard: FC<ExperienceCardProps> = ({ data }) => (
  <Card className={styles.root}>{data.items.map((item) => item)}</Card>
)

export default memo(ExperienceCard)
