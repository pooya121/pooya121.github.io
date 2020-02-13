import { default as styledEmotion, CreateStyled } from '@emotion/styled'
import { ThemeState } from '@/store/theme'
import { useTheme as useThemeEmotion } from 'emotion-theming'

export interface EmotionThemeModel extends ThemeState {
  dir: string
}

const styled = styledEmotion as CreateStyled<EmotionThemeModel>
const useTheme = useThemeEmotion as () => EmotionThemeModel
export { styled, useTheme }
