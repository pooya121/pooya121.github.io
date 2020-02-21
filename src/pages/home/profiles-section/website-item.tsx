import {
  ProfileListItem,
  ProfileItemName,
  ProfileItemAnchor,
  ProfileItemIconWrap,
  ProfileItemAnchorWrap
} from './styles'
import { useLocale, useFormatedUrl } from '@/util/hooks'
import { WebsiteIcon } from '@/icons'

interface Props {
  children?: never
}

const WebsiteItem: React.FC<Props> = () => {
  const {
    profiles: { website }
  } = useLocale()
  const formatedUrl = useFormatedUrl(website.url)
  return (
    <ProfileListItem
      css={{
        display: 'none',
        '@media print': {
          display: 'flex'
        }
      }}
    >
      <ProfileItemIconWrap>
        <WebsiteIcon />
      </ProfileItemIconWrap>
      <ProfileItemName>{website.name}</ProfileItemName>
      <ProfileItemAnchorWrap>
        <ProfileItemAnchor href={website.url}>{formatedUrl}</ProfileItemAnchor>
      </ProfileItemAnchorWrap>
    </ProfileListItem>
  )
}

export default WebsiteItem
