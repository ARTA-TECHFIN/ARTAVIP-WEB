const langMap = {
  en: 'English',
  tc: '繁體中文',
  sc: '简体中文',
} as const

type langT = keyof typeof langMap

export { langMap }
export type { langT }
