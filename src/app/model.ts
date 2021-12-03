import { forward } from 'effector'
import { createGate } from 'effector-react'

import { loadCurrencyRatesFx } from '~/features/currency'
import { loadSearchIdFx } from '~/features/search'

export const AppGate = createGate()

/** @description Запрашиваем `searchId` и
 * котировки валют при первоначальном рендеринге */
forward({
  from: AppGate.open,
  to: [loadSearchIdFx, loadCurrencyRatesFx],
})
