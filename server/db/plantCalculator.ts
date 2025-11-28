import { VegetableYield } from '../../models/vegetableYield'
import db from './connection'

export async function getAllVegetablesYield(): Promise<VegetableYield[]> {
  const vegetableYield = await db('vegetables').select(
    'id',
    'name',
    'yield_per_plant_min as yieldPerPlantMin',
    'yield_per_plant_max as yieldPerPlantMax',
    'consumption_adult_kg as consumptionAdultKg  ',
    'consumption_child_kg as consumptionChildKg',
  )
  return vegetableYield
}
