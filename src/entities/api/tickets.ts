export enum AirlineCode {
  FV = 'Rossiya Airlines',
  EY = 'Etihad Airways',
  MH = 'Malaysia Airlines',
  EK = 'Emirates Airlines',
  TG = 'Thai Airways',
  S7 = 'S7 Airlines',
  SU = 'Aeroflot',
}

export interface Logo {
  url: string
  size: number[]
}

export interface Carrier {
  code: keyof typeof AirlineCode
  name: `${AirlineCode}`
}

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
  carrier: keyof typeof AirlineCode
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

export interface Ticket extends Omit<TicketEntity, 'carrier'> {
  id: string
  logo: Logo
  carrier: Carrier
  totalDuration: number
  totalStops: number
}
