// Author: Igor Dimitrijević (@igorskyflyer)

export function getLocalDate(date: Date = new Date()): string {
  if (!date) {
    return ''
  }

  return date.toLocaleString('en-uk', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Europe/Belgrade',
    timeZoneName: 'longOffset'
  })
}
