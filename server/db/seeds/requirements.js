export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('requirements').del()

  // Inserts seed entries
  await knex('requirements').insert([
    {
      id: 1,
      germination: 'Chit and plant tubers',
      sun: 'Full sun',
      water: 'Moderate and even moisture',
    },
    {
      id: 2,
      germination: 'Sow sets or seeds directly',
      sun: 'Full sun',
      water: 'Steady moisture, avoid waterlogging',
    },
    {
      id: 3,
      germination: 'Sow seed or transplant seedlings',
      sun: 'Full sun',
      water: 'High early, mulch to retain moisture',
    },
    {
      id: 4,
      germination: 'Start in trays then transplant',
      sun: 'Full sun',
      water: 'Keep moist until established, then moderately regular',
    },
    {
      id: 5,
      germination: 'Direct sow in warm soil',
      sun: 'Full or part sun',
      water: 'Regular watering, consistent but not waterlogged',
    },
  ])
}
