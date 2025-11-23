// db/db.ts
import db from './connection'
import { PlantData } from '../../models/plant'

export async function getAllPlants(): Promise<PlantData[]> {
  return db('vegetables').select(
    'vegetables.id',
    'vegetables.name',
    'vegetables.description',
    'vegetables.image',
  )
}
