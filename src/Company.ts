import { faker } from "@faker-js/faker";

export class Company {
  companyName: string
  catchPhrase: string
  location: {
    lat: number,
    lng: number
  }

  constructor() {
    this.companyName = faker.company.name()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }

  markerContent(): string {
    return `
      <div>
        <h5>Company: ${this.companyName}</h5>
        <h6>${this.catchPhrase}</h6>
      </div>
    `
  }
}