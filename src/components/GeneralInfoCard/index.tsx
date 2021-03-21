import { memo } from 'react'
import type { FC } from 'react'
import Card from '../Card'
import styles from './styles.module.scss'

export interface GeneralInfoCardData {
  jobPosition: string
  fullName: string
  emailLabel: string
  email: string
  mobileLabel: string
  mobile: string
  formattedMobile: string
  skypeLabel: string
  skype: string
}

interface GeneralInfoCardProps {
  data: GeneralInfoCardData
  children?: never
}

const GeneralInfoCard: FC<GeneralInfoCardProps> = ({ data }) => (
  <Card className={styles.root}>
    <div>
      <h1 className={styles.title}>{data.fullName}</h1>
      <h2 className={styles.subTitle}>{data.jobPosition}</h2>
      <dl className={styles.descriptionList}>
        <dt>{data.emailLabel}</dt>
        <dd>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </dd>

        <dt>{data.mobileLabel}</dt>
        <dd>
          <a href={`tel:${data.mobile}`}>{data.formattedMobile}</a>
        </dd>

        <dt>{data.skypeLabel}</dt>
        <dd>
          <a href={`skype:${data.skype}`}>{data.skype}</a>
        </dd>
      </dl>
    </div>
    <img
      className={styles.image}
      src="https://pooya121.github.io/images/pooya.jpg"
      width="300"
      height="300"
      alt=""
    />
  </Card>
)

export default memo(GeneralInfoCard)
