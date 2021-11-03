export const formatDuration = (minutes: number): string => {
  const hh = Math.floor(minutes / 60)
  const mm = Math.round(minutes % 60)
  return `${hh}ч ${mm}м`
}

export const getTimeFromDate = (date: number): string =>
  new Date(date).toLocaleTimeString('ru', {
    hour: 'numeric',
    minute: 'numeric',
  })

export const getTimeInterval = (date: string, duration: number): string => {
  const start = new Date(date).getTime()
  const end = start + 60 * 1000 * duration
  return `${getTimeFromDate(start)} – ${getTimeFromDate(end)}`
}
