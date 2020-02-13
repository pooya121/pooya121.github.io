import dynamic from 'next/dynamic'
import { Global } from '@emotion/core'
import DelayedLoading, { LoadingCloseContext } from '../delayed-loading'
const MainGallery = dynamic(() => import('./gallery'), {
  loading() {
    return <DelayedLoading />
  }
})
const Gallery: React.FC<import('./gallery').Props> = props => {
  return (
    <LoadingCloseContext.Provider value={{ onClose: props.onClose }}>
      <Global
        styles={{
          body: {
            overflow: 'hidden'
          }
        }}
      />
      <MainGallery {...props} />
    </LoadingCloseContext.Provider>
  )
}

export default Gallery
