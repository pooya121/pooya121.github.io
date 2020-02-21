import { IconType } from '@/icons'
import {
  ProfileListItem,
  ProfileItemName,
  ProfileItemAnchor,
  ProfileItemIconWrap,
  ProfileItemAnchorWrap
} from './styles'
import { useMemo, useRef, useState } from 'react'
import { useSpring, useChain } from 'react-spring'
import { useFormatedUrl } from '@/util/hooks'

interface Props {
  children?: never
  url: string
  name: string
  icon: IconType
  index: number
}

const ProfileItem: React.FC<Props> = ({ url, icon: Icon, name, index }) => {
  const delay = useMemo(() => 2500 + index * 200, [index])
  const [areSpringsFinished, setAreSpringsFinished] = useState(false)
  const formatedUrl = useFormatedUrl(url)
  const iconSpringRef = useRef(undefined as any)
  const nameSpringRef = useRef(undefined as any)
  const anchorSpringRef = useRef(undefined as any)

  const iconStyle = useSpring({
    delay,
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    ref: iconSpringRef
  })
  const nameStyle = useSpring({
    delay,
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    ref: nameSpringRef
  })
  const anchorStyle = useSpring({
    delay,
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    ref: anchorSpringRef,
    onRest() {
      setAreSpringsFinished(true)
    }
  })

  useChain([iconSpringRef, nameSpringRef, anchorSpringRef], [0, 0.5, 1])

  return (
    <ProfileListItem data-disable-actions={!areSpringsFinished}>
      <ProfileItemIconWrap style={iconStyle}>
        <Icon />
      </ProfileItemIconWrap>
      <ProfileItemName style={nameStyle}>{name}</ProfileItemName>
      <ProfileItemAnchorWrap style={anchorStyle}>
        <ProfileItemAnchor href={url}>{formatedUrl}</ProfileItemAnchor>
      </ProfileItemAnchorWrap>
    </ProfileListItem>
  )
}

export default ProfileItem
