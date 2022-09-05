class Vehicule {
  constructor(public color: string) { }

  protected drive(): void {
    console.log('Chugga chugga')
  }

  protected honk(): void {
    console.log("Beeppp!")
  }
}

const vehicule = new Vehicule('orange')
console.log(vehicule)

class Carr extends Vehicule {
  constructor(public wheels: number, public color: string) {
    super(color)
  }

  drive(): void {
    console.log("Boom")
  }

  private start(): void {
    console.log(`Car with ${this.wheels} wheels is running!`)
  }

  startDrivingProcess(): void {
    this.start()
    this.drive()
    this.honk()
  }
}

const car = new Carr(4, "matte-black")

car.startDrivingProcess()























