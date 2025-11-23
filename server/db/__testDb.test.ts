import { beforeAll, beforeEach, expect, describe, it, afterAll } from 'vitest'

import db from './connection.ts'
import { getAllRegions } from './region.ts'
import { getPlantDetail } from './plantDetail.ts'

beforeAll(async () => {
  console.log('before all')
  await db.migrate.latest()
})

beforeEach(async () => {
  console.log('before each')
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

describe('Region database functions testing', () => {
  it('returns an array of all the regions', async () => {
    const exampleRegion = { id: 1, name: 'Far North', zone: '9a', notes: '' }

    const regions = await getAllRegions()

    expect(regions[0]).toStrictEqual(exampleRegion)
    expect(regions).toHaveLength(66)
    expect(regions[0]).toStrictEqual(exampleRegion)
  })
})

describe('testing plant detail calls', () => {
  it('should join a plant by id with its corresponding soil, spacing, requirements, feeding and staking needs', async () => {
    const examplePotato = {
      id: 1,
      name: 'Potatoes',
      scientificName: 'Solanum tuberosum',
      description: 'Tuberous crop grown underground; staple in many gardens.',
      daysToHarvestMin: 90,
      daysToHarvestMax: 120,
      yieldPerPlantMin: 1,
      yieldPerPlantMax: 3,
      storage: 'Cool (10–15°C), dark, 2–4 months',
      image: '../../public/potato.webp',
      soilId: 1,
      soilType: 'Loamy, well-drained fertile soil',
      soilPreparation: 'Add compost or well-rotted manure before planting',
      spacingId: 1,
      spacingRowCm: 75,
      spacingPlantCm: 30,
      requirementsGermination: 'Chit and plant tubers',
      requirementsSun: 'Full sun',
      requirementsWater: 'Moderate and even moisture',
      feedingSchedule:
        'Low-nitrogen fertiliser at planting and at hilling (for tubers)',
      stakingRequired: 'false',
      stakingNotes: '',
    }
    const vege = await getPlantDetail(1)
    expect(vege.id).toStrictEqual(examplePotato.id)
  })
})
