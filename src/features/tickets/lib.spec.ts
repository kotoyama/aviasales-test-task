import { segmentMock, timezoneMock } from '~/entities/mocks'

import { getTimeFromDate, formatDuration, getTimeInterval } from './lib'

describe('tickets lib', () => {
  describe('formatDuration', () => {
    test('should be defined', () => {
      expect(formatDuration).toBeDefined()
    })

    test('should format flight duration properly', () => {
      expect(formatDuration(segmentMock.duration)).toBe('29ч 45м')
    })
  })

  describe('getTimeFromDate', () => {
    test('should be defined', () => {
      expect(getTimeFromDate).toBeDefined()
    })

    test('should extract time from date properly', () => {
      expect(getTimeFromDate(segmentMock.date, timezoneMock)).toBe('05:18')
    })
  })

  describe('getTimeInterval', () => {
    test('should be defined', () => {
      expect(getTimeInterval).toBeDefined()
    })

    test('should calculate time interval properly', () => {
      expect(
        getTimeInterval(segmentMock.date, segmentMock.duration, timezoneMock),
      ).toBe('05:18 – 11:03')
    })
  })
})
