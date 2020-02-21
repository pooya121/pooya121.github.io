import HomeSectionLayout from '../home-section-layout'
import NumberedHeading from '@/components/numbered-heading'
import InfoItem from './info-item'
import { InfoList } from './styles'
import ImageBox from './image-box'
import { useLocale } from '@/util/hooks'

interface Props {
  children?: never
}

const PersonalInfoSection: React.FC<Props> = () => {
  const { personalInfo } = useLocale()
  return (
    <HomeSectionLayout index={0}>
      <NumberedHeading index={0}>{personalInfo.title}</NumberedHeading>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          '@media (max-width: 600px)': { flexDirection: 'column' }
        }}
      >
        <InfoList>
          <InfoItem
            index={1}
            itemKey={personalInfo.birthdate.label}
            itemValue={personalInfo.birthdate.value}
          />
          <InfoItem
            index={2}
            itemKey={personalInfo.education.label}
            itemValue={personalInfo.education.value}
          />
          <InfoItem
            index={3}
            itemKey={personalInfo.militaryService.label}
            itemValue={personalInfo.militaryService.value}
          />
          <InfoItem
            index={4}
            itemKey={personalInfo.location.label}
            itemValue={personalInfo.location.value}
          />
          <InfoItem
            index={5}
            itemKey={personalInfo.email.label}
            itemValue={personalInfo.email.value}
            href={`mailto:${personalInfo.email.value}`}
          />
          <InfoItem
            index={6}
            itemKey={personalInfo.phoneNumber.label}
            itemValue={personalInfo.phoneNumber.formatedValue}
            href={`tel:${personalInfo.phoneNumber.value}`}
            ltr
          />
        </InfoList>
        <ImageBox />
      </div>
    </HomeSectionLayout>
  )
}

export default PersonalInfoSection
