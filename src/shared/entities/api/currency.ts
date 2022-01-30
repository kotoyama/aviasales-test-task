export interface Rate {
  code: string
  alphaCode: string
  numericCode: string
  name: string
  rate: number
  date: string
  inverseRate: number
}

export type Rates = {
  [key: string]: Rate
}
