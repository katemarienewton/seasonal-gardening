export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, auth0_id: 'username' },
    { id: 2, auth0_id: 'user_name' },
  ])
}
