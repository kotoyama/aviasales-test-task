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
