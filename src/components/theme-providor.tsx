import { useSelector, shallowEqual } from 'react-redux'
import { StoreState } from '@/store'
import { ThemeProvider as EmotionThemeProvidor } from 'emotion-theming'
import Head from 'next/head'
type EmotionThemeModel = import('@/styles').EmotionThemeModel

const ThemeProvidor: React.FC = ({ children }) => {
  const theme: EmotionThemeModel = useSelector(
    (state: StoreState) => ({
      ...state.theme,
      dir: state.locale.dir
    }),
    (prevState, nextState) =>
      shallowEqual(
        { name: prevState.name, dir: prevState.dir },
        { name: nextState.name, dir: nextState.dir }
      )
  )
  return (
    <EmotionThemeProvidor theme={theme}>
      <Head>
        <meta name="theme-color" content={theme.colors.mainBackground} />
      </Head>
      {children}
    </EmotionThemeProvidor>
  )
}

export default ThemeProvidor
