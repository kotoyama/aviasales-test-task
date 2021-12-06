import { root } from '~/root'

import { TicketsEntity } from '~/entities'

import { Response } from '~/lib/request'

export const search = root.domain('search')

export const $searchId = search.store<string>('')
export const loadTicketsFx = search.effect<string, Response<TicketsEntity>>()
