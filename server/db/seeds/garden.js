export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('garden').del()

  // Inserts seed entries
  await knex('garden').insert([
    { id: 1, user_id: 1, vege_id: 1 },
    { id: 2, user_id: 1, vege_id: 2 },
    { id: 3, user_id: 1, vege_id: 3 },
  ])
}
