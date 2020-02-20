import { useMemo } from 'react'

import { useLocale } from '@/util/hooks'
import { Anchor } from '@/components/styled'

interface Props {
  children?: never
}

const WebsiteAnchor: React.FC<Props> = () => {
  const { lang } = useLocale()
  const { url, formatedUrl } = useMemo(
    () =>
      lang === 'fa'
        ? {
            url: 'https://pooya121.github.io/fa/',
            formatedUrl: 'pooya121.github.io/fa'
          }
        : {
            url: 'https://pooya121.github.io',
            formatedUrl: 'pooya121.github.io'
          },
    [lang]
  )
  return (
    <Anchor
      css={{
        minWidth: 0,
        display: 'none',
        fontSize: 15,
        '@media print': {
          display: 'flex'
        }
      }}
      href={url}
    >
      {formatedUrl}
    </Anchor>
  )
}
export default WebsiteAnchor
