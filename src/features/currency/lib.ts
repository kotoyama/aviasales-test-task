import { Currency, CurrencyType } from './types'

const rub: Currency = {
  type: CurrencyType.RUB,
  label: 'RUB',
  active: true,
  rate: 1,
}

const usd: Currency = {
  type: CurrencyType.USD,
  label: 'USD',
  active: false,
  rate: 1,
}

const eur: Currency = {
  type: CurrencyType.EUR,
  label: 'EUR',
  active: false,
  rate: 1,
}

export const defaultCurrency = rub
export const currencyGroup = [rub, usd, eur]
