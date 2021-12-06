import { fork, allSettled, Scope } from 'effector'

import { searchIdRes } from '~/entities/mocks'

import './init'
import { $searchId } from './private'
import { loadSearchIdFx } from './public'

let scope: Scope

describe('test', () => {
  test('test issue', async () => {
    const searchFn = jest.fn(() => searchIdRes)
    scope = fork({
      handlers: new Map().set(loadSearchIdFx, searchFn),
    })

    await allSettled(loadSearchIdFx, { scope })

    expect(searchFn).toHaveBeenCalledTimes(1)
    expect(scope.getState($searchId)).toBe('eqre')
  })
})
