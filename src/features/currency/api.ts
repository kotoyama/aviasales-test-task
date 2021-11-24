import { attach, Effect } from 'effector'

import { Rates } from '~/entities'

import { Response, requestFx } from '~/lib/request'

export const getCurrencyRatesReqFx: Effect<void, Response<Rates>> = attach({
  effect: requestFx,
  mapParams: () => ({
    path: '/daily/rub.json',
    baseUrl: `${process.env.CURRENCY_RATES_API_URL}`,
  }),
})
