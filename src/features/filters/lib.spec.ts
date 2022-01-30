import { ticketsMock } from '~/shared/api/mocks/tickets'
import { Ticket } from '~/shared/api'

import { hasAmountOfStops } from './lib'

const tickets = ticketsMock as Ticket[]

describe('filters lib', () => {
  describe('hasAmountOfStops', () => {
    test('should be defined', () => {
      expect(hasAmountOfStops).toBeDefined()
    })

    test('should find out if some segment has a certain amount of stops', () => {
      expect(hasAmountOfStops(0)(tickets[0])).toBeFalsy()
      expect(hasAmountOfStops(1)(tickets[0])).toBeTruthy()
      expect(hasAmountOfStops(2)(tickets[0])).toBeTruthy()
      expect(hasAmountOfStops(3)(tickets[0])).toBeFalsy()

      expect(hasAmountOfStops(0)(tickets[1])).toBeTruthy()
      expect(hasAmountOfStops(1)(tickets[1])).toBeFalsy()
      expect(hasAmountOfStops(2)(tickets[1])).toBeFalsy()
      expect(hasAmountOfStops(3)(tickets[1])).toBeTruthy()
    })
  })
})
