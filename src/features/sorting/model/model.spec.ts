import { fork, allSettled, Scope } from 'effector'

import './init'
import { $activeSort } from './public'
import { $sortGroup, sortChanged } from './private'
import { sortGroup, defaultSort } from '../lib'
import { SortType } from '../types'

let scope: Scope

describe('sort model', () => {
  const changeFn = jest.fn()
  sortChanged.watch(changeFn)

  beforeEach(() => {
    scope = fork()
  })

  test('should be initialized properly with default states', () => {
    expect(scope.getState($sortGroup)).toBe(sortGroup)
    expect(scope.getState($activeSort)).toBe(defaultSort)
  })

  test('should apply new sort properly', async () => {
    await allSettled(sortChanged, {
      params: SortType.FASTEST,
      scope,
    })

    const activeSort = scope.getState($activeSort)
    const sortGroup = scope.getState($sortGroup)

    expect(changeFn).toHaveBeenCalledTimes(1)
    expect(changeFn).toHaveBeenCalledWith(SortType.FASTEST)
    expect(activeSort.type).toBe(SortType.FASTEST)
    sortGroup
      .filter((sort) => sort.type !== activeSort.type)
      .forEach((sort) => {
        expect(sort.active).toBeFalsy()
      })
  })
})
