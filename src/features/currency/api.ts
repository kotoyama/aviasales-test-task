import { Rates } from '~/entities'

import { Response, request } from '~/lib/request'

export const getCurrencyRatesReq = (): Promise<Response<Rates>> =>
  request<Rates>({
    path: '/daily/rub.json',
    baseUrl: `${process.env.CURRENCY_RATES_API_URL}`,
  })
