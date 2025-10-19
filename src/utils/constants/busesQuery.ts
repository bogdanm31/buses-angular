export const busesQuery = `
{
  stop(id: "HSL:1201110") {
    id
    name
    stoptimesWithoutPatterns {
      trip {
        id
        route {
          shortName
        }
      }
      realtimeArrival
      arrivalDelay
      serviceDay
    }
  }
}`;