export const midnightTime = new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000;

export const timeUnits = [{
  symbol: 's',
  name: {
    singular: 'second',
    plural: 'seconds'
  }
}, {
  symbol: 'm',
  name: {
    singular: 'minute',
    plural: 'minutes'
  }
}, {
  symbol: 'h',
  name: {
    singular: 'hour',
    plural: 'hours'
  }
}];