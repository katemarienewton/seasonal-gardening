// db/db.ts
import db from './connection'
import { PlantData } from '../../models/plant'

export async function getAllPlants(): Promise<PlantData[]> {
  return db('vegetables').select(
    'id',
    'name',
    'description',
    'soil_id',
    'spacing_id',
    'requirements_id',
    'feeding_id',
    'staking_id',
    'days_to_harvest_min',
    'days_to_harvest_max',
    'yield_per_plant_min',
    'yield_per_plant_max',
    'storage',
    'image',
  )
}
