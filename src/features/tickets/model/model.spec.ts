import { fork, allSettled, Scope } from 'effector'

import { filterChanged } from '~/features/filters/model/private'
import { $filtersFn } from '~/features/filters/model/public'
import { sortChanged } from '~/features/sorting/model/private'
import { $activeSort } from '~/features/sorting/model/public'
import { ticketsRes } from '~/shared/api/mocks/tickets'
import { TicketEntity } from '~/shared/api'
import '~/init'

import {
  $limit,
  $cache,
  $loading,
  $results,
  $canLoadMore,
  $firstChunkLoaded,
  limitChanged,
} from './private'
import { SortType } from '../../sorting/types'
import { Transfer } from '../../filters/types'
import { CHUNK_SIZE, normalizeTickets } from '../lib'

let scope: Scope
const rawTicketsMock = ticketsRes.body.tickets as TicketEntity[]

jest.mock('nanoid', () => ({ nanoid: () => 'kek' }))

describe('tickets model', () => {
  test('should be initialized properly with default states', () => {
    scope = fork()
    expect(scope.getState($limit)).toBe(CHUNK_SIZE)
    expect(scope.getState($loading)).toBeTruthy()
    expect(scope.getState($canLoadMore)).toBeFalsy()
    expect(scope.getState($firstChunkLoaded)).toBeFalsy()
    expect(scope.getState($results)).toStrictEqual([])
  })

  describe('filled tickets', () => {
    beforeEach(() => {
      scope = fork({
        values: new Map().set($cache, rawTicketsMock),
      })
    })

    test('should sort tickets properly', async () => {
      await allSettled(sortChanged, {
        params: SortType.OPTIMAL,
        scope,
      })

      const { comparator } = scope.getState($activeSort)
      const expected = normalizeTickets(rawTicketsMock).sort(comparator)
      expect(scope.getState($results)).toStrictEqual(expected)
    })

    test('should filter tickets properly', async () => {
      await allSettled(filterChanged, {
        params: Transfer.ZERO,
        scope,
      })

      const filtersFn = scope.getState($filtersFn)
      const { comparator } = scope.getState($activeSort)
      const expected = normalizeTickets(rawTicketsMock)
        .filter(filtersFn)
        .sort(comparator)
      expect(scope.getState($results)).toStrictEqual(expected)
    })

    test('should check properly if we can load more tickets (target is init tickets)', async () => {
      await allSettled(limitChanged, { scope })
      expect(scope.getState($limit)).toBe(CHUNK_SIZE * 2)
      expect(scope.getState($canLoadMore)).toBeTruthy()

      await allSettled(limitChanged, { scope })
      expect(scope.getState($limit)).toBe(CHUNK_SIZE * 3)
      expect(scope.getState($canLoadMore)).toBeFalsy()
    })

    test('should check properly if we can load more tickets (target is filtered tickets)', async () => {
      expect(scope.getState($results)).toHaveLength(12)

      await allSettled(filterChanged, {
        params: Transfer.THREE,
        scope,
      })
      expect(scope.getState($canLoadMore)).toBeTruthy()
      expect(scope.getState($results)).toHaveLength(10)

      await allSettled(limitChanged, { scope })
      expect(scope.getState($canLoadMore)).toBeFalsy()
    })

    test('should reset limit after sorting/filters update', async () => {
      await allSettled(limitChanged, { scope })
      await allSettled(sortChanged, {
        params: SortType.FASTEST,
        scope,
      })

      expect(scope.getState($limit)).toBe(CHUNK_SIZE)

      await allSettled(limitChanged, { scope })
      await allSettled(filterChanged, {
        params: Transfer.ONE,
        scope,
      })

      expect(scope.getState($limit)).toBe(CHUNK_SIZE)
    })
  })
})
