// Object desctructuring annotations
const profile = {
  name: 'Abishai',
  age: 20,
  coords: {
    lat: 0,
    long: 16
  },
  setAge(age: number): boolean {
    this.age = age
    return true
  }
}

const { age }: { age: number } = profile
const { coords: { lat, long } }: { coords: { lat: number, long: number } } = profile