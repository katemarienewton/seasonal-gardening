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
    { id: 6, row_cm: '150', plant_cm: '120' },
    { id: 7, row_cm: '30', plant_cm: '10' },
    { id: 8, row_cm: '25', plant_cm: '20' },
    { id: 9, row_cm: '300', plant_cm: '250' },
    { id: 10, row_cm: '30', plant_cm: '15' },
    { id: 11, row_cm: '40', plant_cm: '30' },
    { id: 12, row_cm: '350', plant_cm: '300' },
    { id: 13, row_cm: '60', plant_cm: '30' },
    { id: 14, row_cm: '180', plant_cm: '100' },
  ])
}
