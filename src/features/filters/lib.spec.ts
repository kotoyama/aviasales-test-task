import { Ticket } from '~/entities'

import { hasAmountOfStops } from './lib'

export const mockTickets: Ticket[] = [
  {
    price: 19183,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-11-21T22:31:00.000Z',
        stops: ['BKK', 'SIN'],
        duration: 1705,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-12-12T05:25:00.000Z',
        stops: ['AUH'],
        duration: 1798,
      },
    ],
    id: '7h9PLt2UGn9drb9I44teT',
    logo: 'https://pics.avs.io/99/36/S7.png',
    totalDuration: 3503,
    totalStops: 4,
  },
  {
    price: 64485,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-11-22T01:38:00.000Z',
        stops: ['KUL', 'DXB', 'IST'],
        duration: 1636,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-12-11T21:27:00.000Z',
        stops: [],
        duration: 969,
      },
    ],
    id: 'l3pHbn6IZubUTzDeVO8r5',
    logo: 'https://pics.avs.io/99/36/S7.png',
    totalDuration: 2605,
    totalStops: 3,
  },
]

describe('filters lib', () => {
  describe('hasAmountOfStops', () => {
    test('should find out if some segment has a certain amount of stops', () => {
      expect(hasAmountOfStops(0)(mockTickets[0])).toBeFalsy()
      expect(hasAmountOfStops(1)(mockTickets[0])).toBeTruthy()
      expect(hasAmountOfStops(2)(mockTickets[0])).toBeTruthy()
      expect(hasAmountOfStops(3)(mockTickets[0])).toBeFalsy()

      expect(hasAmountOfStops(0)(mockTickets[1])).toBeTruthy()
      expect(hasAmountOfStops(1)(mockTickets[1])).toBeFalsy()
      expect(hasAmountOfStops(2)(mockTickets[1])).toBeFalsy()
      expect(hasAmountOfStops(3)(mockTickets[1])).toBeTruthy()
    })
  })
})
