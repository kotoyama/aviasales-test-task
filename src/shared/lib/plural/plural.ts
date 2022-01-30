/**
 * Pluralize russian words
 * @param {Number} count quantity for word
 * @param {Array.<string[]>} declarations array of words [одна, две, пять]
 * @param {String} [zeroDeclaration] declaration for zero quantity
 * @example plural(4, ['пересадка', 'пересадки', 'пересадок'], 'Без пересадок')
 * @returns {String} count + plural form for word
 */
export const plural = (
  count: number,
  declarations: string[],
  zeroDeclaration?: string,
): string => {
  const cases = [2, 0, 1, 1, 1, 2]
  return zeroDeclaration && !count
    ? zeroDeclaration
    : `${count} ${
        declarations[
          count % 100 > 4 && count % 100 < 20
            ? 2
            : cases[Math.min(count % 10, 5)]
        ]
      }`
}
