const add = (a: number, b: number): number => {
  return a + b
}


function substract(a: number, b: number): number {
  return a - b
}

const divide = function (a: number, b: number): number {
  return a / b
}

const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

// Object destructuring with annotation
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)