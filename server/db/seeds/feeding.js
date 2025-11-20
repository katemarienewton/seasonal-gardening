export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('feeding').del()

  // Inserts seed entries
  await knex('feeding').insert([
    {
      id: 1,
      schedule:
        'Low-nitrogen fertiliser at planting and at hilling (for tubers)',
    },
    {
      id: 2,
      schedule:
        'Nitrogen-rich side dressing 4–6 weeks after sowing/transplanting',
    },
    {
      id: 3,
      schedule: 'High potassium fertiliser every 3–4 weeks during fruiting',
    },
    {
      id: 4,
      schedule:
        'Brassicas: apply nitrogen feed after transplanting and again when heads begin forming',
    },
    {
      id: 5,
      schedule:
        'Use balanced organic feed monthly; more potassium mid-season for roots',
    },
  ])
}
