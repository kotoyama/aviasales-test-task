import { Ticket, Transfer, Filter, SegmentEntity } from '~/entities'

import { plural } from '~/lib/plural'

const segmentHasAmountOfStops = (stops: number) => (segment: SegmentEntity) =>
  segment.stops.length === stops

const hasAmountOfStops =
  (stops: number) =>
  (ticket: Ticket): boolean =>
    ticket.segments.every(segmentHasAmountOfStops(stops))

const generateLabel = (stops: number) =>
  stops === -1
    ? 'Все'
    : plural(stops, ['пересадка', 'пересадки', 'пересадок'], 'Без пересадок')

export const filterGroup: Filter[] = [
  {
    active: true,
    type: Transfer.ALL,
    label: generateLabel(-1),
    predicate: () => true,
  },
  {
    active: true,
    type: Transfer.ZERO,
    label: generateLabel(0),
    predicate: hasAmountOfStops(0),
  },
  {
    active: true,
    type: Transfer.ONE,
    label: generateLabel(1),
    predicate: hasAmountOfStops(1),
  },
  {
    active: true,
    type: Transfer.TWO,
    label: generateLabel(2),
    predicate: hasAmountOfStops(2),
  },
  {
    active: true,
    type: Transfer.THREE,
    label: generateLabel(3),
    predicate: hasAmountOfStops(3),
  },
]
