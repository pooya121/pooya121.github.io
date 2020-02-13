import { useSelector, shallowEqual } from 'react-redux'
import { StoreState } from '@/store'
import { ThemeProvider as EmotionThemeProvidor } from 'emotion-theming'
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
  return <EmotionThemeProvidor theme={theme}>{children}</EmotionThemeProvidor>
}

export default ThemeProvidor
