import { forward, guard, sample } from 'effector'
import { nanoid } from 'nanoid'

import {
  $searchId,
  $tickets,
  $loading,
  ticketsUpdated,
  loadTicketsFx,
} from './private'
import { loadSearchIdFx } from './public'
import { TicketEntity } from '../types'

const loadingContinues = guard(loadTicketsFx.doneData, {
  filter: (res) => !res.body.stop,
})

const loadingStopped = guard(loadTicketsFx.doneData, {
  filter: (res) => res.body.stop,
})

const transformTickets = ticketsUpdated.prepend((tickets: TicketEntity[]) =>
  tickets.map((ticket) => ({
    ...ticket,
    id: nanoid(),
    logo: `${process.env.PICS_CDN_URL}/${ticket.carrier}.png`,
    totalDuration: ticket.segments.reduce(
      (acc, { duration }) => acc + duration,
      0,
    ),
    stopsCount: ticket.segments.reduce<number[]>(
      (acc, { stops }) => [...acc, stops.length],
      [],
    ),
  })),
)

$loading.on(loadingStopped, () => false)
$searchId.on(loadSearchIdFx.doneData, (_, res) => res.body.searchId)
$tickets.on(ticketsUpdated, (state, payload) => [...state, ...payload])

forward({
  from: $searchId,
  to: loadTicketsFx,
})

sample({
  source: $searchId,
  clock: [loadingContinues, loadTicketsFx.fail],
  target: loadTicketsFx,
})

sample({
  clock: loadTicketsFx.doneData,
  fn: (res) => res.body.tickets,
  target: transformTickets,
})
