const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary() {
    return `This is the best car ever!`
  }
}

// Long typed annotation
const printVehicule = function (vehicule: { name: string; year: number; broken: boolean }): void {
  const { name, year, broken } = vehicule

  console.log(`Name: ${name}`)
  console.log(`Year: ${year}`)
  console.log(`Broken? ${broken}`)
}(oldCivic)

// Using interface to improve it
interface Vehicule {
  name: string
  year: number
  broken: boolean
  summary(): string
}

const printVehiculeWithInterface = function (vehicule: Vehicule): void {
  const { name, year, broken } = vehicule

  console.log(`Name: ${name}`)
  console.log(`Year: ${year}`)
  console.log(`Broken? ${broken}`)
}(oldCivic)


