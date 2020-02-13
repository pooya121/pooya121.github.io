import { useTheme, styled } from '@/styles'
import { useSpring, animated, config } from 'react-spring'
import { useLocale } from '@/util/hooks'

interface Props {
  children?: never
}

const ImageBox: React.FC<Props> = () => {
  const { colors } = useTheme()
  const { personalInfo } = useLocale()
  const wrapperStyle = useSpring({
    delay: 500,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow
  })
  return (
    <animated.div
      style={wrapperStyle}
      css={{
        width: 220,
        height: 220,
        position: 'relative',
        transform: 'translateY(-25%)',
        border: `1px solid ${colors.deemphasized}`,
        '@media (max-width: 700px)': {
          width: 180,
          height: 180
        },
        '@media (max-width: 600px)': {
          width: 180,
          height: 180,
          order: -1,
          alignSelf: 'center',
          transform: 'none',
          marginBottom: 25
        }
      }}
    >
      <ImageDot />
      <ImageDot />
      <ImageDot />
      <ImageDot />
      <img
        css={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)'
        }}
        alt="pooya"
        src={personalInfo.imageUrl}
      />
    </animated.div>
  )
}

const ImageDot = styled.i(({ theme }) => ({
  backgroundColor: theme.colors.deemphasized,
  transition: 'background-color .2s ease-out',
  width: 10,
  height: 10,
  position: 'absolute',
  zIndex: -1,
  '&:nth-of-type(1), &:nth-of-type(2)': {
    top: -5
  },
  '&:nth-of-type(3), &:nth-of-type(4)': {
    bottom: -5
  },
  '&:nth-of-type(1), &:nth-of-type(3)': {
    left: -5
  },
  '&:nth-of-type(2), &:nth-of-type(4)': {
    right: -5
  }
}))

export default ImageBox
