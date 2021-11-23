import { forward, sample } from 'effector'

import { $searchId, loadTicketsFx } from './private'
import { searchContinues, loadSearchIdFx } from './public'

$searchId.on(loadSearchIdFx.doneData, (_, res) => res.body.searchId)

forward({
  from: $searchId,
  to: loadTicketsFx,
})

sample({
  clock: [searchContinues, loadTicketsFx.fail],
  source: $searchId,
  target: loadTicketsFx,
})
