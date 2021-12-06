import { SearchIdEntity, TicketsEntity } from '~/entities'

import { Response, request } from '~/lib/request'

export const getSearchIdReq = (): Promise<Response<SearchIdEntity>> =>
  request<SearchIdEntity>({
    path: '/search',
  })

export const getTicketsReq = (
  searchId: string,
): Promise<Response<TicketsEntity>> =>
  request<TicketsEntity>({
    path: '/tickets',
    params: { searchId },
  })
