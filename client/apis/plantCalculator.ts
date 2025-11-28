import request from 'superagent'
// import { VegetableYield } from '../../models/vegetableYield'

export interface PlantCalculatorResult {
  id: number
  name: string
  plantsNeeded: number
}

export async function calculatePlants(adults: number, children: number) {
  const result = await request
    .post('/api/v1/plant-calculator')
    .send({ adults, children })

  console.log('API response', result.body)
  return result.body as PlantCalculatorResult[]
}
