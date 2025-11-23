import {
  describe,
  it,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  vi,
} from 'vitest'
import request from 'supertest'

import db from '../db/connection.ts'
import server from '../server.ts'
import * as dbFuncs from '../db/plantDetail.ts'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

describe('getting plant details from a specific id', () => {
  it('gets potatoes with id 1', async () => {
    const res = await request(server).get('/api/v1/vegetables/1')
    const vege = res.body
    expect(res.status).toBe(200)
    expect(vege.name).toStrictEqual('Potatoes')
    expect(vege).toStrictEqual({
      daysToHarvestMax: 120,
      daysToHarvestMin: 90,
      description: 'Tuberous crop grown underground; staple in many gardens.',
      feedingSchedule:
        'Low-nitrogen fertiliser at planting and at hilling (for tubers)',
      id: 1,
      image: '../../public/potato.webp',
      name: 'Potatoes',
      requirementsGermination: 'Chit and plant tubers',
      requirementsSun: 'Full sun',
      requirementsWater: 'Moderate and even moisture',
      scientificName: 'Solanum tuberosum',
      soilId: 1,
      soilPreparation: 'Add compost or well-rotted manure before planting',
      soilType: 'Loamy, well-drained fertile soil',
      spacingId: 1,
      spacingPlantCm: 30,
      spacingRowCm: 75,
      stakingNotes: '',
      stakingRequired: 'false',
      storage: 'Cool (10–15°C), dark, 2–4 months',
      yieldPerPlantMax: 3,
      yieldPerPlantMin: 1,
    })
  })

  it('returns a 500 error when region db call fails', async () => {
    vi.spyOn(dbFuncs, 'getPlantDetail').mockRejectedValue(
      new Error('DB Failed'),
    )

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const response = await request(server).get('/api/v1/vegetables/1')

    expect(response.status).toBe(500)
    expect(errorSpy.mock.calls[0][0]).toBe('DB Failed')
  })
})
