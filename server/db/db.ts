import db from './connection'
import { PlantData } from '../../models/plant'

export async function getAllPlants(): Promise<PlantData[]> {
  const rows = await db('vegetables').select(
    'id',
    'name',
    'description',
    'image',
  )

  return rows as PlantData[]
}
