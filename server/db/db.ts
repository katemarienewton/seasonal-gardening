import db from './connection'
import { PlantData } from '../../models/plant'

export async function getAllPlants(
  regionHardinessZone?: string,
  month?: string,
): Promise<PlantData[]> {
  let query = db('vegetables')
    .join('season', 'vegetables.id', 'season.vege_id')
    .select('vegetables.*')

  if (regionHardinessZone) {
    query = query.where('season.hardiness_zone', regionHardinessZone)
  }

  if (month) {
    query = query.where('season.planting_month', 'like', `%${month}%`)
  }

  const rows = await query

  return rows as PlantData[]
}
