import db from './connection'

export async function getAllPlants() {
  return db('vegetables').select()
}
