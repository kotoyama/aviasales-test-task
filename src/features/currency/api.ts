import { attach, Effect } from 'effector'

import { Rates } from '~/shared/api'
import { Response, requestFx } from '~/shared/api/request'

export const getCurrencyRatesReqFx: Effect<void, Response<Rates>> = attach({
  effect: requestFx,
  mapParams: () => ({
    path: '/daily/rub.json',
    baseUrl: `${process.env.CURRENCY_RATES_API_URL}`,
  }),
})
