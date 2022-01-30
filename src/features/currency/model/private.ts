import { root } from '~/root'

import { Currency, CurrencyType } from '~/shared/api'

import { currencyGroup, defaultCurrency } from '../lib'

export const currency = root.createDomain('currency')

export const $currencies = currency.createStore<Currency[]>(currencyGroup)
export const currencyChanged = currency.createEvent<CurrencyType>()

export const $selectedCurrency = $currencies.map(
  (currencies) => currencies.find(({ active }) => active) || defaultCurrency,
)
