import NumberedHeading from '@/components/numbered-heading'

import HomeSectionLayout from '../home-section-layout'
import ProfileItem from './profile-item'
import calculateProfileItems from './calculate-profile-items'
import { useMemo } from 'react'
import { useLocale } from '@/util/hooks'
import WebsiteItem from './website-item'

interface Props {
  children?: never
}

const ProfilesSection: React.FC<Props> = () => {
  const { profiles } = useLocale()
  const profileItems = useMemo(() => calculateProfileItems(profiles.items), [profiles.items])
  return (
    <HomeSectionLayout hideBorder index={3}>
      <NumberedHeading index={3}>{profiles.title}</NumberedHeading>
      <ul css={{ padding: 0, margin: 0 }}>
        <WebsiteItem />
        {profileItems.map((profileData, i) => (
          <ProfileItem index={i} key={i} {...profileData} />
        ))}
      </ul>
    </HomeSectionLayout>
  )
}

export default ProfilesSection
