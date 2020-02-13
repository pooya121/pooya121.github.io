import { forwardRef, SVGProps } from 'react'

export default forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(function ArrowRightIcon(
  props,
  ref
) {
  return (
    <svg
      ref={ref}
      fill="currentColor"
      viewBox="0 0 31.49 31.49"
      width="1em"
      height="1em"
      {...props}
    >
      <use xlinkHref="#_svg_arrow-right-path" />
    </svg>
  )
})
