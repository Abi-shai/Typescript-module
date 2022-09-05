// Types annotations
// Type annotations is when the developer explicitily annotate the types of declared variables
// ex:
let apples: number = 5

let isOnline: boolean
isOnline = false

let verse: string
verse = "And the faithfull shall be rewarded!"

// Array
let colors: string[]
colors = ["Red", "Green", "Blue"]

let numbers: number[]
numbers = [1, 2, 3]

// Classes
class Car { }

let cars: Car[]
cars = [Car, Car, Car]

// Objects literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

let points: typeof point[]
points = [{ x: 100, y: 500 }]

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}
let loggingTheNumber: typeof logNumber


// Type inference
// Type inference is when the Typescript engine refers the type of a variable on hover
// without the need of the developer annotate it
// Type inference works when we declare a variable and assign a value on the same line
// always use type inference as much as possible
let fruit = "apple";


