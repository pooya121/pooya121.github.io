import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

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
  <li className={styles.root}>
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

    <ul className={styles.techStack}>
      {techStack.map((point, i) => (
        <li className={styles.techStackItem} key={i}>
          {point}
        </li>
      ))}
    </ul>
  </li>
)

export default memo(ExperienceItem)
