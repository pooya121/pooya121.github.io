import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

import { StoreDispatch } from '@/store'
import { useTheme } from '@/styles'
import { lightTheme, darkTheme } from '@/store/theme/themes'
import StylishButton from '@/components/stylish-button'
import { MoonIcon, SunIcon } from '@/icons'
import { useLocale } from '@/util/hooks'

interface Props {
  children?: never
}

const ThemeToggle: React.FC<Props> = () => {
  const { name } = useTheme()
  const { darkThemeLabel, lightThemeLabel } = useLocale()
  const dispatch = useDispatch<StoreDispatch>()
  const { Icon, label } = useMemo(() => {
    if (name === 'light') return { Icon: MoonIcon, label: darkThemeLabel }
    return { Icon: SunIcon, label: lightThemeLabel }
  }, [name, lightThemeLabel, darkThemeLabel])
  return (
    <StylishButton
      onClick={() => dispatch({ type: 'SET_THEME', ...(name === 'dark' ? lightTheme : darkTheme) })}
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        'html[dir="ltr"] &': { marginLeft: 7 },
        'html[dir="rtl"] &': { marginRight: 7 }
      }}
    >
      {label}{' '}
      <Icon
        css={{ 'html[dir="ltr"] &': { marginLeft: 5 }, 'html[dir="rtl"] &': { marginRight: 5 } }}
      />
    </StylishButton>
  )
}
export default ThemeToggle
