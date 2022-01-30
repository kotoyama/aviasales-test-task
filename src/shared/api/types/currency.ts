/**
 * API response entities
 */

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

/**
 * Transformed view-ready entities
 */

export enum CurrencyType {
  RUB = 'RUB',
  USD = 'USD',
  EUR = 'EUR',
}

export interface Currency {
  type: CurrencyType
  label: string
  active: boolean
  rate: number
}
