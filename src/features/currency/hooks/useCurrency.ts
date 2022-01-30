import { useStore } from 'effector-react'

import { Currency } from '../types'
import { $selectedCurrency } from '../model/private'

export const useCurrency = (): Currency => useStore($selectedCurrency)
