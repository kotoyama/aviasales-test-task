import { plural } from './plural'

const mockDeclarations = ['пересадка', 'пересадки', 'пересадок']

describe('plural lib', () => {
  test('should pluralize properly', () => {
    expect(plural(0, mockDeclarations, 'Без пересадок')).toBe('Без пересадок')
    expect(plural(0, mockDeclarations)).toBe('0 пересадок')
    expect(plural(1, mockDeclarations)).toBe('1 пересадка')
    expect(plural(2, mockDeclarations)).toBe('2 пересадки')
    expect(plural(3, mockDeclarations)).toBe('3 пересадки')
    expect(plural(4, mockDeclarations)).toBe('4 пересадки')
    expect(plural(5, mockDeclarations)).toBe('5 пересадок')
  })
})
