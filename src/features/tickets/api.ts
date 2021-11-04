import { attach, Effect } from 'effector'

import { SearchIdEntity, TicketsEntity } from '~/entities'

import { Method, Response, requestFx } from '~/lib/request'

export const getSearchIdReqFx: Effect<void, Response<SearchIdEntity>> = attach({
  effect: requestFx,
  mapParams: () => ({
    path: '/search',
    method: Method.GET,
    baseUrl: `${process.env.AVIASALES_API_URL}`,
  }),
})

export const getTicketsReqFx: Effect<string, Response<TicketsEntity>> = attach({
  effect: requestFx,
  mapParams: (searchId: string) => ({
    path: '/tickets',
    method: Method.GET,
    params: { searchId },
    baseUrl: `${process.env.AVIASALES_API_URL}`,
  }),
})
