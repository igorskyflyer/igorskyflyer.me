export function getYear() {
  return new Date().getFullYear()
}

export function getLocalDate() {
  return new Date().toLocaleString('en-uk', {
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
