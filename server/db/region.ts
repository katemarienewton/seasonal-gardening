import { Region } from '../../models/region'
import db from './connection.ts'

const regionSelect = ['id', 'name', 'hardiness_zone as zone', 'notes']

export async function getAllRegions(): Promise<Region[]> {
  const regionList = await db('region').select(...regionSelect)
  return regionList as Region[]
}
