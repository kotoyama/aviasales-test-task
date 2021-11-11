import { Ticket, Transfer, Filter, SegmentEntity } from '~/entities'

const segmentHasAmountOfStops = (stops: number) => (segment: SegmentEntity) =>
  segment.stops.length === stops

const hasAmountOfStops =
  (stops: number) =>
  (ticket: Ticket): boolean =>
    ticket.segments.every(segmentHasAmountOfStops(stops))

export const filterGroup: Filter[] = [
  {
    active: true,
    label: 'Все',
    type: Transfer.ALL,
    predicate: () => true,
  },
  {
    active: true,
    label: 'Без пересадок',
    type: Transfer.ZERO,
    predicate: hasAmountOfStops(0),
  },
  {
    active: true,
    label: '1 пересадка',
    type: Transfer.ONE,
    predicate: hasAmountOfStops(1),
  },
  {
    active: true,
    label: '2 пересадки',
    type: Transfer.TWO,
    predicate: hasAmountOfStops(2),
  },
  {
    active: true,
    label: '3 пересадки',
    type: Transfer.THREE,
    predicate: hasAmountOfStops(3),
  },
]
