import { root } from '~/root'

import { Currency, CurrencyType } from '~/shared/entities'

import { currencyGroup, defaultCurrency } from '../lib'

export const currency = root.domain('currency')

export const $currencies = currency.store<Currency[]>(currencyGroup)
export const currencyChanged = currency.event<CurrencyType>()

export const $selectedCurrency = $currencies.map(
  (currencies) => currencies.find(({ active }) => active) || defaultCurrency,
)
