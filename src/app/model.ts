import { forward } from 'effector'
import { createGate } from 'effector-react'

import { loadCurrencyRatesFx } from '~/features/currency'
import { loadSearchIdFx } from '~/features/search'

export const AppGate = createGate()

forward({
  from: AppGate.open,
  to: [loadSearchIdFx, loadCurrencyRatesFx],
})
