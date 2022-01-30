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
