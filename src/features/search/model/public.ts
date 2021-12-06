import { guard } from 'effector'
import { root } from '~/root'

import { SearchIdEntity } from '~/entities'

import { Response } from '~/lib/request'

import { loadTicketsFx } from './private'

export const search = root.domain('search-public')

export const loadSearchIdFx = search.effect<void, Response<SearchIdEntity>>()

export const searchContinues = guard(loadTicketsFx.doneData, {
  filter: (res) => !res.body.stop,
})

export const searchCompleted = guard(loadTicketsFx.doneData, {
  filter: (res) => res.body.stop,
})
