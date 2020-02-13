import { useRef } from 'react'
import Link from 'next/link'
import { useSpring, useChain, animated } from 'react-spring'

import { useLocale } from '@/util/hooks'
import { useTheme } from '@/styles'
import { GithubIcon } from '@/icons'
import StylishAnchor from '@/components/stylishAnchor'
import { getAnchorStyles } from '@/components/styled'

import ThemeToggle from './theme-toggle'

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
    <header css={{ marginBottom: 40, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
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
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignSelf: 'stretch',
          alignItems: 'flex-end',
          '@media (max-width: 500px)': {
            alignItems: 'center',
            marginTop: 30,
            width: '100%'
          },
          'html[dir=ltr] &': {
            marginLeft: 'auto'
          },
          'html[dir=rtl] &': {
            marginRight: 'auto'
          }
        }}
      >
        <animated.div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            fontSize: 12,
            marginBottom: 10,
            '@media print': {
              display: 'none'
            }
          }}
          style={anchorStyle}
        >
          <Link href={otherLnaguageHref}>
            <StylishAnchor css={{ minWidth: 0 }} href={otherLnaguageHref}>
              {lang === 'fa' ? 'English' : 'Farsi'}
            </StylishAnchor>
          </Link>
          <ThemeToggle />
        </animated.div>
        <animated.a
          style={anchorStyle}
          href={header.viewOnGithub.url}
          css={{
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            ...getAnchorStyles(theme),
            '@media print': {
              display: 'none'
            }
          }}
        >
          {header.viewOnGithub.title}{' '}
          <GithubIcon
            css={{
              'html[dir=ltr] &': { marginLeft: '0.25rem' },
              'html[dir=rtl] &': { marginRight: '0.25rem' }
            }}
          />
        </animated.a>
      </div>
    </header>
  )
}

export default HomeHeader
