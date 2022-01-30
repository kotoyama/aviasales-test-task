import { fork, allSettled, Scope, Event } from 'effector'

import { AppGate } from '~/app/model'
import { ticketsRes } from '~/shared/api/mocks/tickets'
import { searchIdRes } from '~/shared/api/mocks/searchId'
import { $rawTickets } from '~/features/tickets/model/private'
import '~/features/tickets/init'

import './init'
import { loadSearchIdFx } from './public'
import { $searchId, loadTicketsFx } from './private'

let scope: Scope

describe('search model', () => {
  test('should set tickets and search ID after completing all side-effects', async () => {
    const searchFn = jest.fn(() => searchIdRes)
    const fetchFn = jest.fn(() => ticketsRes)
    scope = fork({
      handlers: new Map()
        .set(loadSearchIdFx, searchFn)
        .set(loadTicketsFx, fetchFn),
    })

    await allSettled(AppGate.open as Event<void>, { scope })

    expect(searchFn).toHaveBeenCalledTimes(1)
    expect(fetchFn).toHaveBeenCalledTimes(1)
    expect(scope.getState($searchId)).toBe('eqre')
    expect(scope.getState($rawTickets)).toBe(ticketsRes.body.tickets)
  })
})
