import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'
import ResetLI from '@/components/ResetElements/ResetLI'
import ResetUL from '@/components/ResetElements/ResetUL'

export interface ExperienceItemProps {
  children?: never
  title: string
  location: string
  techStack: string[]
  startDate: string
  endDate?: string
  ISOStartDate?: string
  ISOEndDate?: string
  description: ReactNode
  points: ReactNode[]
  noEndDateText: string
  totalTime?: string
  position: string
  url: string
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  title,
  points,
  techStack,
  startDate,
  ISOEndDate,
  ISOStartDate,
  endDate,
  location,
  description,
  noEndDateText,
  position,
  url,
  totalTime,
}) => (
  <ResetLI>
    <div className={styles.head}>
      <h3 className={styles.title}>
        {position} @{' '}
        <a target="_blank" rel="noreferrer" href={url}>
          {title}
        </a>
      </h3>
      <small className={styles.location}>{location}</small>
    </div>

    <div className={styles.date}>
      <time dateTime={ISOStartDate}>{startDate}</time> -{' '}
      {endDate ? (
        <>
          <time dateTime={ISOEndDate}>{endDate}</time> <span className={styles.totalTime}>({totalTime})</span>
        </>
      ) : (
        noEndDateText
      )}
    </div>

    <p className={clsx(styles.description, styles.contentText)}>{description}</p>

    <ul className={styles.points}>
      {points.map((point, i) => (
        <li className={styles.point} key={i}>
          {point}
        </li>
      ))}
    </ul>

    <ResetUL className={styles.techStack}>
      {techStack.map((point, i) => (
        <ResetLI className={styles.techStackItem} key={i}>
          {point}
        </ResetLI>
      ))}
    </ResetUL>
  </ResetLI>
)

export default memo(ExperienceItem)
