import { root } from 'root'

import { Ticket } from 'features/tickets'

export const filters = root.domain('filters-public')
export const filtersUpdated = filters.event<Ticket[]>()
