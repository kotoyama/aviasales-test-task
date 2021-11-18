import { getTimeFromDate, formatDuration, getTimeInterval } from './lib'

const mockSegment = {
  origin: 'MOW',
  destination: 'HKT',
  date: '2021-09-30T00:18:00.000Z',
  stops: [],
  duration: 1785,
}

const mockTimezone = {
  timeZone: 'Asia/Yekaterinburg',
}

describe('tickets lib', () => {
  describe('getTimeFromDate', () => {
    test('should extract time from date properly', () => {
      expect(getTimeFromDate(mockSegment.date, mockTimezone)).toBe('05:18')
    })
  })

  describe('formatDuration', () => {
    test('should format flight duration properly', () => {
      expect(formatDuration(mockSegment.duration)).toBe('29ч 45м')
    })
  })

  describe('getTimeInterval', () => {
    test('should calculate time interval properly', () => {
      expect(getTimeInterval(mockSegment.date, mockSegment.duration)).toBe(
        '05:18 – 11:03',
      )
    })
  })
})
