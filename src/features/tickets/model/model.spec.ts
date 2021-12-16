import { fork, allSettled, Scope } from 'effector'

import { SortType, TicketEntity } from '~/entities'
import { ticketsRes } from '~/entities/mocks/tickets'
import { sortChanged } from '~/features/sort/model/private'
import { $activeSort } from '~/features/sort/model/public'
import '~/init'

import { CHUNK_SIZE, normalizeTickets } from '../lib'
import { $limit, $loading, $cache, $results } from './private'

let scope: Scope

const rawTicketsMock = ticketsRes.body.tickets as TicketEntity[]

jest.mock('nanoid', () => ({ nanoid: () => 'kek' }))

describe('tickets model', () => {
  test('should be initialized properly with default states', () => {
    scope = fork()
    expect(scope.getState($limit)).toBe(CHUNK_SIZE)
    expect(scope.getState($loading)).toBeTruthy()
    expect(scope.getState($cache)).toStrictEqual([])
  })

  test('should sort tickets properly', async () => {
    scope = fork({
      values: new Map().set($cache, rawTicketsMock),
    })
    await allSettled(sortChanged, {
      params: SortType.OPTIMAL,
      scope,
    })
    const tickets = normalizeTickets(rawTicketsMock)
    const { comparator } = scope.getState($activeSort)
    expect(scope.getState($results)).toStrictEqual(tickets.sort(comparator))
  })
})
