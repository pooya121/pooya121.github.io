import { useRef } from 'react'
import Link from 'next/link'
import { useSpring, useChain, animated } from 'react-spring'

import { useLocale } from '@/util/hooks'
import { useTheme } from '@/styles'
import StylishAnchor from '@/components/stylishAnchor'

import WebsiteAnchor from './website-anchor'
import ThemeToggle from './theme-toggle'
import { GithubAnchor, StyledGithubIcon, EndContentWrap, HeaderWrap } from './styles'

interface Props {
  children?: never
}

const HomeHeader: React.FC<Props> = () => {
  const theme = useTheme()
  const { header, lang } = useLocale()

  // refs will be assigned in  spring
  const h1SpringRef = useRef(undefined as any)
  const h2SpringRef = useRef(undefined as any)
  const anchorSpringRef = useRef(undefined as any)

  const h1Props = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    ref: h1SpringRef
  })
  const h2Style = useSpring({
    from: { opacity: 0, transform: 'translateY(15px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    ref: h2SpringRef
  })
  const anchorStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: anchorSpringRef
  })

  const otherLnaguageHref = lang === 'fa' ? '/' : '/fa'

  useChain([h1SpringRef, h2SpringRef, anchorSpringRef], [0, 0.4, 0.8])
  return (
    <HeaderWrap>
      <div>
        <animated.h1
          style={h1Props}
          css={{ margin: '0 0 10px 0', color: theme.colors.emphasized, fontSize: '2rem' }}
        >
          {header.title}
        </animated.h1>
        <animated.h2 style={h2Style} css={{ margin: 0, fontWeight: 'normal', fontSize: '1.5rem' }}>
          {header.subTitle}
        </animated.h2>
      </div>
      <EndContentWrap>
        <animated.div css={{ fontSize: 12 }} style={anchorStyle}>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginBottom: 10,
              '@media print': {
                display: 'none'
              }
            }}
          >
            <Link href={otherLnaguageHref}>
              <StylishAnchor css={{ minWidth: 0 }} href={otherLnaguageHref}>
                {lang === 'fa' ? 'English' : 'Farsi'}
              </StylishAnchor>
            </Link>
            <ThemeToggle />
          </div>
          {/* WebsiteAnchor will be rendered on print */}
          {/* <WebsiteAnchor /> */}
        </animated.div>
        <GithubAnchor style={anchorStyle} href={header.viewOnGithub.url}>
          {header.viewOnGithub.title} <StyledGithubIcon />
        </GithubAnchor>
      </EndContentWrap>
    </HeaderWrap>
  )
}

export default HomeHeader
