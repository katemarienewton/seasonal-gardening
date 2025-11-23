import db from './connection'

export async function getAllPlants() {
  const fruits = db('fruit')
    .join('vegetables', 'vegetables.name', 'vegetable.image')
    .select('fruit.name', 'fruit.image')

  const vegetables = db('vegetables')
    .join('fruit', 'fruit.name', 'fruit.image')
    .select('vegetables.name', 'vegetables.image')

  const result = await fruits.union(vegetables)
  return result
}
