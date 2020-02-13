import { IconType, TwitterIcon, TelegramIcon, LinkedinIcon, InstagramIcon } from '@/icons'

interface ProfileItem {
  url: string
  name: string
  icon: IconType
}

const calculateProfileItems = (
  items: import('@/store/locale/types').LocaleState['profiles']['items']
): ProfileItem[] =>
  items.map(({ id, name, url }) => {
    const icon = (() => {
      switch (id) {
        case 'telegram':
          return TelegramIcon
        case 'twitter':
          return TwitterIcon
        case 'linkedin':
          return LinkedinIcon
        case 'instagram':
          return InstagramIcon
        default:
          return TwitterIcon
      }
    })()
    return { icon, name, url }
  })

export default calculateProfileItems
