// Corrected Seed File

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      auth0_id: 'auth0|plant_user_mock_id',
      display_name: 'Plant User',
      region_id: 1,
    },
    {
      id: 2,
      auth0_id: 'auth0|fruit_user_mock_id',
      display_name: 'Fruit User',
      region_id: 2,
    },
  ])
}
