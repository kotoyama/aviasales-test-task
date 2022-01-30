import { Currency } from '~/shared/entities'

export const formatPrice = (
  price: number,
  currency: Currency,
  format = 'Ru-ru',
): string =>
  Intl.NumberFormat(format, {
    style: 'currency',
    currency: currency.type,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price * currency.rate)
