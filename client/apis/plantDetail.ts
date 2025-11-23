import request from 'superagent'
import { PlantData } from '../../models/plant'

const rootURL = new URL(`api/v1`, document.baseURI)

export async function getPlantDetail(id: number) {
  const result = await request.get(`${rootURL}/vegetables/${id}`)
  return result.body as PlantData[]
}
