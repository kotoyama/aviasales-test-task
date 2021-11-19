export const formatPrice = (
  price: number,
  currency = 'RUB',
  format = 'Ru-ru',
): string =>
  Intl.NumberFormat(format, { style: 'currency', currency }).format(price)
