import { faker } from '@faker-js/faker'
import { Mappable } from './CustonMap'

export class User {
  name: string
  location: {
    lat: number,
    lng: number
  }

  constructor() {
    this.name = faker.person.firstName()
    this.location= {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }

  markerContent(): string {
    return `
      <div>
        <h5>User: ${this.name}</h5>
      </div>
    `
  }
}