import { PlantData } from '../../models/plant.ts'
import db from './connection.ts'

const plantSelect = ['id', 'name']

export async function getAllPlants(): Promise<PlantData[]> {
  const plantList = await db('vegetables').select(...plantSelect)
  return plantList as PlantData[]
}
