import request from 'superagent'
import { PlantData } from '../../models/plant'

const rootURL = '/api/v1'

export async function getPlants(
  regionHardinessZone?: string,
  month?: string,
): Promise<PlantData[]> {
  let req = request.get(`${rootURL}/plants`)

  if (regionHardinessZone) req = req.query({ regionHardinessZone })
  if (month) req = req.query({ month })

  const res = await req
  return res.body as PlantData[]
}
