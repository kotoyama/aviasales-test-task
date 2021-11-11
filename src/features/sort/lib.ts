import { Score, Ticket, Sort, SortType } from '~/entities'

const getOptimalityScore = (ticket: Ticket): number => {
  const priceScore = ticket.price * Score.PRICE
  const durationScore = (ticket.totalDuration / 60) * Score.HOUR
  const stopsScore = ticket.totalStops * Score.STOP
  return priceScore + durationScore + stopsScore
}

const compareOnDuration = (a: Ticket, b: Ticket): number =>
  a.totalDuration - b.totalDuration

const compareOnPrice = (a: Ticket, b: Ticket): number => a.price - b.price

const compareOnOptimality = (a: Ticket, b: Ticket): number =>
  getOptimalityScore(a) - getOptimalityScore(b)

const cheapest: Sort = {
  type: SortType.CHEAPEST,
  label: 'Самый дешёвый',
  comparator: compareOnPrice,
  active: true,
}

const fastest: Sort = {
  type: SortType.FASTEST,
  label: 'Самый быстрый',
  comparator: compareOnDuration,
  active: false,
}

const optimal: Sort = {
  type: SortType.OPTIMAL,
  label: 'Оптимальный',
  comparator: compareOnOptimality,
  active: false,
}

export const defaultSort = cheapest
export const sortGroup = [cheapest, fastest, optimal]
