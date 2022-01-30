import { classNames } from './classNames'

describe('classNames lib', () => {
  test('should be defined', () => {
    expect(classNames).toBeDefined()
  })

  test('should attach classes properly if any class is false', () => {
    const mockClasses = {
      btn: true,
      primary: false,
      secondary: true,
      disabled: false,
    }
    expect(classNames(mockClasses)).toBe('btn secondary')
  })

  test('should attach classes properly if all classes are false', () => {
    const mockClasses = {
      foo: false,
      bar: false,
    }
    expect(classNames(mockClasses)).toBe('')
  })
})
