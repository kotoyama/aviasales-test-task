export const currencyRatesRes = {
  body: {
    usd: {
      code: 'USD',
      alphaCode: 'USD',
      numericCode: '840',
      name: 'U.S. Dollar',
      rate: 0.013563346601286,
      date: 'Wed, 15 Dec 2021 11:55:01 GMT',
      inverseRate: 73.728116621688,
    },
    eur: {
      code: 'EUR',
      alphaCode: 'EUR',
      numericCode: '978',
      name: 'Euro',
      rate: 0.012023774296956,
      date: 'Wed, 15 Dec 2021 11:55:01 GMT',
      inverseRate: 83.168560495447,
    },
  },
  status: 200,
  ok: true,
  headers: {},
}

export const currencyRatesMock = [
  {
    type: 'RUB',
    label: 'RUB',
    active: true,
    rate: 1,
  },
  {
    type: 'USD',
    label: 'USD',
    active: false,
    rate: 0.013563346601286,
  },
  {
    type: 'EUR',
    label: 'EUR',
    active: false,
    rate: 0.012023774296956,
  },
]
