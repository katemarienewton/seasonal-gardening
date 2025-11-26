import request from 'superagent'
import { PlantData } from '../../models/plant'

const rootURL = '/api/v1'

export async function getPlants(): Promise<PlantData[]> {
  const res = await request.get(`${rootURL}/plants`)
  return res.body as PlantData[]
}
