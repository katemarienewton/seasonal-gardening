import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import request from 'supertest'

import db from '../db/connection.ts'
import server from '../server.ts'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

describe('getting all regions', () => {
  it('gets all regions', async () => {
    console.log('integration test, getting all regions')
    const res = await request(server).get('/api/v1/regions')
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "name": "Far North",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 2,
          "name": "Whangarei",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 3,
          "name": "Kaipara",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 4,
          "name": "Auckland",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 5,
          "name": "Thames-Coromandel",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 6,
          "name": "Hauraki",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 7,
          "name": "Waikato",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 8,
          "name": "Matamata-Piako",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 9,
          "name": "Hamilton",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 10,
          "name": "Waipa",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 11,
          "name": "Western Bay of Plenty",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 12,
          "name": "Tauranga",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 13,
          "name": "Kawerau",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 14,
          "name": "Whakatane",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 15,
          "name": "Rotorua",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 16,
          "name": "Opotiki",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 17,
          "name": "Gisborne",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 18,
          "name": "Wairoa",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 19,
          "name": "Taupo",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 20,
          "name": "South Waikato",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 21,
          "name": "Otorohanga",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 22,
          "name": "Waitomo",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 23,
          "name": "Napier",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 24,
          "name": "Hastings",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 25,
          "name": "Ruapehu",
          "notes": "",
          "zone": "8b",
        },
        {
          "id": 26,
          "name": "New Plymouth",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 27,
          "name": "South Taranaki",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 28,
          "name": "Stratford",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 29,
          "name": "Central Hawkes Bay",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 30,
          "name": "Whanganui",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 31,
          "name": "Rangitikei",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 32,
          "name": "Manawatu",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 33,
          "name": "Horowhenua",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 34,
          "name": "Tararuas",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 35,
          "name": "Palmerston North",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 36,
          "name": "Masterton",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 37,
          "name": "Carteron",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 38,
          "name": "South Wairarapa",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 39,
          "name": "Wellington",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 40,
          "name": "Lower Hutt",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 41,
          "name": "Upper Hutt",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 42,
          "name": "Kapiti Coast",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 43,
          "name": "Porirua",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 44,
          "name": "Nelson",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 45,
          "name": "Marlborough",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 46,
          "name": "Tasman",
          "notes": "",
          "zone": "10a",
        },
        {
          "id": 47,
          "name": "Buller",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 48,
          "name": "Kaikoura",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 49,
          "name": "Hurunui",
          "notes": "",
          "zone": "9b",
        },
        {
          "id": 50,
          "name": "Waimakariri",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 51,
          "name": "Grey",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 52,
          "name": "Christchurch",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 53,
          "name": "Selwyn",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 54,
          "name": "Ashburton",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 55,
          "name": "Timaru",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 56,
          "name": "Westland",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 57,
          "name": "Mackenzie",
          "notes": "",
          "zone": "8b",
        },
        {
          "id": 58,
          "name": "Waimate",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 59,
          "name": "Waitaki",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 60,
          "name": "Central Otago",
          "notes": "",
          "zone": "8b",
        },
        {
          "id": 61,
          "name": "Dunedin",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 62,
          "name": "Clutha",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 63,
          "name": "Foveaux",
          "notes": "",
          "zone": "9a",
        },
        {
          "id": 64,
          "name": "Invercargill",
          "notes": "",
          "zone": "8b",
        },
        {
          "id": 65,
          "name": "Southland",
          "notes": "",
          "zone": "8b",
        },
        {
          "id": 66,
          "name": "Queenstown Lakes",
          "notes": "",
          "zone": "8b",
        },
      ]
    `)
  })
})
