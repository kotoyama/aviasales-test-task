/**
 * API response entities
 */

export interface SearchIdEntity {
  searchId: string
}

export interface SegmentEntity {
  origin: string
  destination: string
  date: string
  stops: string[]
  duration: number
}

export interface TicketEntity {
  price: number
  carrier: string
  segments: SegmentEntity[]
}

export interface TicketsEntity {
  stop: boolean
  tickets: TicketEntity[]
}

/**
 * Transformed view-ready entities
 */

export interface Ticket extends TicketEntity {
  id: string
  logo: string
  totalDuration: number
  stopsCount: number[]
}
