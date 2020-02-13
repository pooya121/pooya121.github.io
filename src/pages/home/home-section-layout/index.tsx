import { HomeSectionWrap, HomeSectionBorder } from './styles'
import { useSpring } from 'react-spring'

const HomeSectionLayout: React.FC<{ index: number; hideBorder?: boolean }> = ({
  children,
  hideBorder,
  index
}) => {
  const borderProps = useSpring({
    delay: (index + 1) * 1000,
    from: { width: '0%' },
    to: { width: '100%' }
  })
  return (
    <HomeSectionWrap>
      {children}
      {!hideBorder && <HomeSectionBorder style={borderProps} />}
    </HomeSectionWrap>
  )
}

export default HomeSectionLayout
