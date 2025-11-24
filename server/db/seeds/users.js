export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, auth0_id: 'plant_user', email: 'plant@gmail.com', region_id: '1' },
    { id: 2, auth0_id: 'fruit_user', email: 'fruit@gmail.com', region_id: '2' },
  ])
}

