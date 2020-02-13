import { styled } from '@/styles'
import ArrowRightIcon from './arrow-right'

export default styled(ArrowRightIcon)({
  'html[dir=rtl] &': { transform: 'scaleX(-1)' }
})
