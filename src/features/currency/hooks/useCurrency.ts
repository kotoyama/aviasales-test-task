import { useStore } from 'effector-react'

import { Currency } from '~/shared/api'

import { $selectedCurrency } from '../model/private'

export const useCurrency = (): Currency => useStore($selectedCurrency)
