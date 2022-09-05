// Usual object
const drink = {
  color: 'Brown',
  carbonated: true,
  sugar: 40
}

// Type alias pre-intro
type Drink = [string, boolean, number]

const pepsiArray = ['brown', true, 40] // Usual array

const pepsiTuple: Drink = ['brown', true, 40] // Tuple
const sprite: Drink = ['clear', true, 40] 