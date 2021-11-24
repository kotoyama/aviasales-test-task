import { attach } from 'effector'

import { getCurrencyRatesReqFx } from '../api'

export const loadCurrencyRatesFx = attach({
  effect: getCurrencyRatesReqFx,
})
