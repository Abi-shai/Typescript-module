// Type inferences
const catMakers = ['Ford', 'Toyota', 'Mercedes']

const dates = [new Date(), new Date()]

const carsMakeBy = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Handling multiple types
const users: (string | number)[] = []
users.push("hello", "hiii", 3)