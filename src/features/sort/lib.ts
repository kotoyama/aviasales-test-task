import { Score, Ticket, Sort, SortType } from '~/entities'

const getOptimalityScore = (ticket: Ticket): number => {
  const priceScore = ticket.price * Score.PRICE
  const durationScore = (ticket.totalDuration / 60) * Score.HOUR
  const stopsScore =
    ticket.stops.reduce((acc, stops) => acc + stops, 0) * Score.STOP
  return priceScore + durationScore + stopsScore
}

const compareOnDuration = (a: Ticket, b: Ticket): number =>
  a.totalDuration - b.totalDuration

const compareOnPrice = (a: Ticket, b: Ticket): number => a.price - b.price

const compareOnOptimality = (a: Ticket, b: Ticket): number =>
  getOptimalityScore(a) - getOptimalityScore(b)

const cheapest: Sort = {
  id: SortType.CHEAPEST,
  label: 'Самый дешёвый',
  comparator: compareOnPrice,
  active: true,
}

const fastest: Sort = {
  id: SortType.FASTEST,
  label: 'Самый быстрый',
  comparator: compareOnDuration,
  active: false,
}

const optimal: Sort = {
  id: SortType.OPTIMAL,
  label: 'Оптимальный',
  comparator: compareOnOptimality,
  active: false,
}

export const defaultSort = cheapest
export const sortGroup: Sort[] = [cheapest, fastest, optimal]
