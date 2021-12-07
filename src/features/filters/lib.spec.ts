import { ticketsMock } from '~/entities/mocks'

import { hasAmountOfStops } from './lib'

describe('filters lib', () => {
  describe('hasAmountOfStops', () => {
    test('should be defined', () => {
      expect(hasAmountOfStops).toBeDefined()
    })

    test('should find out if some segment has a certain amount of stops', () => {
      expect(hasAmountOfStops(0)(ticketsMock[0])).toBeFalsy()
      expect(hasAmountOfStops(1)(ticketsMock[0])).toBeTruthy()
      expect(hasAmountOfStops(2)(ticketsMock[0])).toBeTruthy()
      expect(hasAmountOfStops(3)(ticketsMock[0])).toBeFalsy()

      expect(hasAmountOfStops(0)(ticketsMock[1])).toBeTruthy()
      expect(hasAmountOfStops(1)(ticketsMock[1])).toBeFalsy()
      expect(hasAmountOfStops(2)(ticketsMock[1])).toBeFalsy()
      expect(hasAmountOfStops(3)(ticketsMock[1])).toBeTruthy()
    })
  })
})
