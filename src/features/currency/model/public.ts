import { root } from '~/root'

import { Rates } from '~/entities'

import { Response } from '~/lib/request'

export const currency = root.domain('currency-public')
export const loadCurrencyRatesFx = currency.effect<void, Response<Rates>>()
