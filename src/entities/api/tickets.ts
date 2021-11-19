/**
 * API response entities
 */

export interface SearchIdEntity {
  searchId: string
}

export interface SegmentEntity {
  // Код города (iata)
  origin: string
  // Код города (iata)
  destination: string
  // Дата и время вылета туда
  date: string
  // Массив кодов (iata) городов с пересадками
  stops: string[]
  // Общее время перелёта в минутах
  duration: number
}

export interface TicketEntity {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов
  // В тестовом задании это всегда поиск "туда-обратно", значит, состоит из двух элементов
  segments: [SegmentEntity, SegmentEntity]
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
  totalStops: number
}
