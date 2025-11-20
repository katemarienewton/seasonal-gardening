export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('staking').del()

  // Inserts seed entries
  await knex('staking').insert([
    { id: 1, required: 'false', notes: '' },
    {
      id: 2,
      required: 'true',
      notes: 'Use trellis or stake; tie stems as plant grows to support fruit',
    },
    {
      id: 3,
      required: 'true',
      notes:
        'Use strong stakes early; tie loosely every 20–30 cm as plant grows',
    },
  ])
}
