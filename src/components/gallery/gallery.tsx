import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { useState, Fragment } from 'react'
import { Global, ClassNames } from '@emotion/core'

export type GalleryItemModel = { src: string; title?: React.ReactNode; caption?: React.ReactNode }

export interface Props {
  children?: never
  images: GalleryItemModel[]
  onClose: () => void
}

const Gallery: React.FC<Props> = ({ images, onClose }) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  return (
    <Fragment>
      <Global styles={{ body: { overflow: 'hidden' } }} />
      <ClassNames>
        {({ css }) => (
          <Lightbox
            imageTitle={images[photoIndex].title}
            imageCaption={images[photoIndex].caption}
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
            onCloseRequest={onClose}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            wrapperClassName={css({ direction: 'ltr' })}
          />
        )}
      </ClassNames>
    </Fragment>
  )
}

export default Gallery
