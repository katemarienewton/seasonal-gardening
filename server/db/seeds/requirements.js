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
    {
      id: 6,
      germination: 'Plant potted plants; seeds uncommon',
      sun: 'Full sun',
      water: 'Consistent moisture; avoid waterlogging',
    },
    {
      id: 7,
      germination: 'Direct sow or transplant divisions',
      sun: 'Full sun or part shade',
      water: 'Moderate moisture',
    },
    {
      id: 8,
      germination: 'Direct sow; does not transplant well',
      sun: 'Full sun',
      water: 'Even moisture, especially in warm weather',
    },
    {
      id: 9,
      germination: 'Plant grafted trees or seedlings',
      sun: 'Full sun',
      water: 'Moderate moisture; drought tolerant once established',
    },
    {
      id: 10,
      germination: 'Plant cloves directly',
      sun: 'Full sun',
      water: 'Light–moderate; reduce near harvest',
    },
    {
      id: 11,
      germination: 'Plant grafted citrus tree',
      sun: 'Full sun',
      water: 'Regular watering, especially in summer',
    },
    {
      id: 12,
      germination: 'Direct sow or plant cuttings',
      sun: 'Full sun or partial shade',
      water: 'Consistent moisture',
    },
    {
      id: 13,
      germination: 'Direct sow; slow germination',
      sun: 'Full sun or part shade',
      water: 'Keep evenly moist',
    },
    {
      id: 14,
      germination: 'Plant grafted stone fruit tree',
      sun: 'Full sun',
      water: 'Moderate; increase during fruiting',
    },
    {
      id: 15,
      germination: 'Direct sow or start indoors',
      sun: 'Full sun',
      water: 'Light watering; drought tolerant',
    },
    {
      id: 16,
      germination: 'Plant runners or seedlings',
      sun: 'Full sun',
      water: 'Regular moisture; avoid wetting leaves',
    },
    {
      id: 17,
      germination: 'Direct sow or transplant seedlings',
      sun: 'Full sun',
      water: 'High water needs early; reduce near harvest',
    },
  ])
}
