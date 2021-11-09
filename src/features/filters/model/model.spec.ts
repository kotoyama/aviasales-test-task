import { fork, allSettled, Scope } from 'effector'

import { Transfer, filtersGroup } from '~/entities'

import './init'
import {
  $filters,
  $allFilterActivated,
  $everyFilterApplied,
  toggleStopsFilter,
  toggleAllFilter,
  checkAllFilter,
  filterChanged,
} from './private'

let scope: Scope

describe('filters', () => {
  const changeFn = jest.fn()
  const checkFn = jest.fn()
  const toggleFn = jest.fn()
  const toggleAllFn = jest.fn()

  filterChanged.watch(changeFn)
  checkAllFilter.watch(checkFn)
  toggleStopsFilter.watch(toggleFn)
  toggleAllFilter.watch(toggleAllFn)

  beforeEach(() => {
    scope = fork()
  })

  test('should be initialized properly with default states', () => {
    expect(scope.getState($filters)).toBe(filtersGroup)
    expect(scope.getState($allFilterActivated)).toBeTruthy()
    expect(scope.getState($everyFilterApplied)).toBeTruthy()
  })

  test('should fire events properly', async () => {
    await allSettled(filterChanged, {
      params: Transfer.TWO,
      scope,
    })

    expect(changeFn).toHaveBeenCalledTimes(1)
    expect(toggleFn).toHaveBeenCalledTimes(1)
    expect(checkFn).not.toHaveBeenCalled()

    checkFn.mockReset()
    changeFn.mockReset()
    toggleFn.mockReset()

    await allSettled(filterChanged, {
      params: Transfer.ALL,
      scope,
    })

    expect(changeFn).toHaveBeenCalledTimes(1)
    expect(checkFn).toHaveBeenCalledTimes(1)
    expect(toggleFn).not.toHaveBeenCalled()
  })

  test('should accept correct arguments for each event', async () => {
    await allSettled(filterChanged, {
      params: Transfer.THREE,
      scope,
    })

    expect(changeFn).toHaveBeenCalledWith(Transfer.THREE)
    expect(toggleFn).toHaveBeenCalledWith(Transfer.THREE)

    checkFn.mockReset()
    changeFn.mockReset()
    toggleFn.mockReset()

    await allSettled(filterChanged, {
      params: Transfer.ALL,
      scope,
    })

    expect(changeFn).toHaveBeenCalledWith(Transfer.ALL)
    expect(checkFn).toHaveBeenCalledWith(Transfer.ALL)
  })

  test('should deactivate "all" filter if any other filter is inactive', async () => {
    await allSettled(filterChanged, {
      params: Transfer.ZERO,
      scope,
    })
    expect(scope.getState($allFilterActivated)).toBeFalsy()
  })

  test('should deactivate all filters if "all" filter is inactive', async () => {
    await allSettled(filterChanged, {
      params: Transfer.ALL,
      scope,
    })
    scope.getState($filters).forEach((filter) => {
      expect(filter.active).toBeFalsy()
    })
  })
})