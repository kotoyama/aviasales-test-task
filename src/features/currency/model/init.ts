import { $currencies, currencyChanged } from './private'
import { loadCurrencyRatesFx } from './public'
import { getCurrencyRatesReq } from '../api'

loadCurrencyRatesFx.use(getCurrencyRatesReq)

$currencies
  .on(loadCurrencyRatesFx.doneData, (currencies, res) =>
    currencies.map((currency) => {
      const code = currency.type.toLowerCase()
      const rate = res.body[code]
      currency.rate = rate ? rate.rate : 1
      return currency
    }),
  )
  .on(currencyChanged, (currencies, type) =>
    currencies.map((currency) => ({
      ...currency,
      active: currency.type === type,
    })),
  )
