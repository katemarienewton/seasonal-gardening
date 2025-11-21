import request from 'superagent'
import type { Region } from '../../models/region'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getAllRegions(): Promise<Region[]> {
  const response = await request.get(`${rootURL}/regions`)
  return response.body as Region[]
}
