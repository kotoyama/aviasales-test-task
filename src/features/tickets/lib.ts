import { nanoid } from 'nanoid'

import { AirlineCode, Ticket, TicketEntity } from '~/entities'

const PICS_CDN_URL = `${process.env.PICS_CDN_URL}`
export const CHUNK_SIZE = 5

export const formatDuration = (minutes: number): string => {
  const hh = Math.floor(minutes / 60)
  const mm = Math.round(minutes % 60)
  return `${hh}ч ${mm}м`
}

export const getTimeFromDate = (
  date: string | number,
  options?: Intl.DateTimeFormatOptions,
): string =>
  new Date(date).toLocaleTimeString('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
    ...options,
  })

export const getTimeInterval = (
  date: string,
  duration: number,
  options?: Intl.DateTimeFormatOptions,
): string => {
  const start = new Date(date).getTime()
  const end = start + 60 * 1000 * duration
  return `${getTimeFromDate(start, options)} – ${getTimeFromDate(end, options)}`
}

export const normalizeTickets = (tickets: TicketEntity[]): Ticket[] =>
  tickets.map((item) => ({
    ...item,
    id: nanoid(),
    logo: {
      url: `${PICS_CDN_URL}/${item.carrier}.png`,
      size: PICS_CDN_URL.split('/').map(Number).filter(Boolean),
    },
    carrier: {
      code: item.carrier,
      name: AirlineCode[item.carrier],
    },
    totalDuration: item.segments.reduce(
      (acc, { duration }) => acc + duration,
      0,
    ),
    totalStops: item.segments.reduce((acc, { stops }) => acc + stops.length, 0),
  }))
