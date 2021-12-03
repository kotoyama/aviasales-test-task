import { forward, sample } from 'effector'

import { $searchId, loadTicketsFx } from './private'
import { searchContinues, loadSearchIdFx } from './public'

$searchId.on(loadSearchIdFx.doneData, (_, res) => res.body.searchId)

/** @description Запрашиваем билеты
 * после получения `searchId` */
forward({
  from: $searchId,
  to: loadTicketsFx,
})

/** @description Продолжаем запрашивать билеты:
 * - Если `stop` не равен `true`
 * - В случае падения запроса */
sample({
  clock: [searchContinues, loadTicketsFx.fail],
  source: $searchId,
  target: loadTicketsFx,
})
