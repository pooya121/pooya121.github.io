export interface ThemeState {
  /** 'light' | 'dark' */
  name: string
  colors: {
    mainBackground: string
    defaultText: string
    emphasized: string
    deemphasized: string
    primary: string
    /** light color in dark mode */
    primaryAlt: string
  }
}
