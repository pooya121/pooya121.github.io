import { useState } from 'react'

import { Anchor } from '@/components/styled'
import Gallery, { GalleryItemModel } from '@/components/gallery/gallery'
import StylishButton from '@/components/stylish-button'

import {
  XpListItem,
  XpItemRole,
  XpItemDateRange,
  XpItemDataWrap,
  GalleryButtonWrap
} from './styles'
import { useLocale } from '@/util/hooks'

interface Props {
  children?: never
  startDate: string
  endDate: string
  devRole: string
  companyName: string
  companyHref: string
  images: GalleryItemModel[]
}

const XpItem: React.FC<Props> = ({
  startDate,
  endDate,
  devRole,
  companyHref,
  companyName,
  images
}) => {
  const [showGallery, setShowGallery] = useState(false)
  const { experience } = useLocale()
  return (
    <XpListItem>
      <XpItemDateRange>
        {startDate} - {endDate}
      </XpItemDateRange>
      <XpItemDataWrap>
        <Anchor href={companyHref}>
          <strong>{companyName}</strong>
        </Anchor>
        <XpItemRole>{devRole}</XpItemRole>
      </XpItemDataWrap>
      <GalleryButtonWrap>
        <StylishButton onClick={() => setShowGallery(true)}>
          {experience.galleryButtonLabel}
        </StylishButton>
      </GalleryButtonWrap>
      {showGallery && <Gallery onClose={() => setShowGallery(false)} images={images} />}
    </XpListItem>
  )
}

export default XpItem
