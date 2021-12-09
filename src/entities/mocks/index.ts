import { Ticket } from '../api/tickets'

export const searchIdRes = {
  body: {
    searchId: 'eqre',
  },
  status: 200,
  ok: true,
  headers: {},
}

export const ticketsRes = {
  body: {
    tickets: [
      {
        price: 73001,
        carrier: 'EY',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-12T22:34:00.000Z',
            stops: ['IST', 'KUL'],
            duration: 1273,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T02:43:00.000Z',
            stops: ['BKK'],
            duration: 1580,
          },
        ],
      },
      {
        price: 21155,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-13T02:56:00.000Z',
            stops: ['AUH'],
            duration: 1577,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T10:08:00.000Z',
            stops: ['KUL', 'SHA'],
            duration: 1744,
          },
        ],
      },
      {
        price: 95157,
        carrier: 'EK',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-12T22:02:00.000Z',
            stops: ['SIN', 'IST', 'BKK'],
            duration: 615,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T01:03:00.000Z',
            stops: ['SHA', 'BKK', 'SIN'],
            duration: 928,
          },
        ],
      },
      {
        price: 54396,
        carrier: 'FV',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-13T07:14:00.000Z',
            stops: ['KUL', 'AUH', 'SIN'],
            duration: 783,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T16:59:00.000Z',
            stops: ['BKK'],
            duration: 1402,
          },
        ],
      },
      {
        price: 31155,
        carrier: 'SU',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-13T04:56:00.000Z',
            stops: [],
            duration: 1740,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T13:08:00.000Z',
            stops: [],
            duration: 1613,
          },
        ],
      },
      {
        price: 92201,
        carrier: 'EK',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-13T00:15:00.000Z',
            stops: ['AUH', 'KUL', 'SHA'],
            duration: 778,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T05:38:00.000Z',
            stops: ['BKK', 'KUL'],
            duration: 1369,
          },
        ],
      },
      {
        price: 80779,
        carrier: 'SU',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-13T01:05:00.000Z',
            stops: [],
            duration: 1123,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T14:15:00.000Z',
            stops: [],
            duration: 1895,
          },
        ],
      },
      {
        price: 82267,
        carrier: 'TG',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-13T05:42:00.000Z',
            stops: ['KUL', 'IST', 'SHA'],
            duration: 1251,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-01T22:02:00.000Z',
            stops: ['SIN', 'AUH', 'BKK'],
            duration: 800,
          },
        ],
      },
      {
        price: 87551,
        carrier: 'FV',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-13T03:19:00.000Z',
            stops: ['HKG'],
            duration: 900,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T11:14:00.000Z',
            stops: ['HKG'],
            duration: 1699,
          },
        ],
      },
      {
        price: 60817,
        carrier: 'TG',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-13T10:20:00.000Z',
            stops: ['KUL'],
            duration: 711,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T16:05:00.000Z',
            stops: ['AUH', 'SHA'],
            duration: 1504,
          },
        ],
      },
      {
        price: 22561,
        carrier: 'EK',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-13T02:45:00.000Z',
            stops: ['IST', 'DXB', 'BKK'],
            duration: 1733,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T14:12:00.000Z',
            stops: ['BKK'],
            duration: 1938,
          },
        ],
      },
      {
        price: 71008,
        carrier: 'TG',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-13T15:46:00.000Z',
            stops: [],
            duration: 1331,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T11:29:00.000Z',
            stops: ['DXB'],
            duration: 1073,
          },
        ],
      },
    ],
    stop: true,
  },
  status: 200,
  ok: true,
  headers: {},
}

export const ticketsMock: Ticket[] = [
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

export const segmentMock = {
  origin: 'MOW',
  destination: 'HKT',
  date: '2021-09-30T00:18:00.000Z',
  stops: [],
  duration: 1785,
}

export const timezoneMock = {
  timeZone: 'Asia/Yekaterinburg',
}
