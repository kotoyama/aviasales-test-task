export const formatPrice = (
  price: number,
  currency = 'RUB',
  LanguageFormat = 'Ru-ru',
): string =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency }).format(
    price,
  )
