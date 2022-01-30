import { attach, Effect } from 'effector'

import { SearchIdEntity, TicketsEntity } from '~/shared/api'
import { Response, requestFx } from '~/shared/api/request'

export const getSearchIdReqFx: Effect<void, Response<SearchIdEntity>> = attach({
  effect: requestFx,
  mapParams: () => ({
    path: '/search',
  }),
})

export const getTicketsReqFx: Effect<string, Response<TicketsEntity>> = attach({
  effect: requestFx,
  mapParams: (searchId: string) => ({
    path: '/tickets',
    params: { searchId },
  }),
})
