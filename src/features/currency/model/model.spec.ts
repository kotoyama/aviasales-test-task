import { fork, allSettled, Scope, Event } from 'effector'

import { AppGate } from '~/app/model'
import { CurrencyType } from '~/entities'
import { currencyRatesRes, currencyRatesMock } from '~/entities/mocks'

import './init'
import { loadCurrencyRatesFx } from './public'
import { $currencies, $selectedCurrency, currencyChanged } from './private'
import { currencyGroup, defaultCurrency } from '../lib'

let scope: Scope

describe('currency model', () => {
  test('should be initialized properly with default states', () => {
    scope = fork()
    expect(scope.getState($currencies)).toBe(currencyGroup)
    expect(scope.getState($selectedCurrency)).toBe(defaultCurrency)
  })

  test('should set currency rates after completing side-effect', async () => {
    const fetchFn = jest.fn(() => currencyRatesRes)
    scope = fork({
      handlers: new Map().set(loadCurrencyRatesFx, fetchFn),
    })

    await allSettled(AppGate.open as Event<void>, { scope })

    expect(fetchFn).toHaveBeenCalledTimes(1)
    expect(scope.getState($currencies)).toStrictEqual(currencyRatesMock)
  })

  test('should apply new currency properly', async () => {
    const changeFn = jest.fn()
    currencyChanged.watch(changeFn)

    scope = fork({
      values: new Map().set($currencies, currencyRatesMock),
    })

    await allSettled(currencyChanged, {
      params: CurrencyType.USD,
      scope,
    })

    const activeCurrency = scope.getState($selectedCurrency)
    const currencies = scope.getState($currencies)

    expect(changeFn).toHaveBeenCalledTimes(1)
    expect(changeFn).toHaveBeenCalledWith(CurrencyType.USD)
    expect(activeCurrency.type).toBe(CurrencyType.USD)
    currencies
      .filter((sort) => sort.type !== activeCurrency.type)
      .forEach((sort) => {
        expect(sort.active).toBeFalsy()
      })
  })
})
