export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('spacing').del()

  // Inserts seed entries
  await knex('spacing').insert([
    { id: 1, row_cm: '75', plant_cm: '30' },
    { id: 2, row_cm: '30', plant_cm: '12' },
    { id: 3, row_cm: '150', plant_cm: '100' },
    { id: 4, row_cm: '60', plant_cm: '45' },
    { id: 5, row_cm: '30', plant_cm: '25' },
  ])
}
