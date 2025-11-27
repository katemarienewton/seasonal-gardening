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
    {
      id: 6,
      schedule:
        'Acidic fertiliser (rhododendron type) in early spring and midsummer',
    },
    {
      id: 7,
      schedule: 'Light nitrogen feed every 4–6 weeks',
    },
    {
      id: 8,
      schedule: 'Balanced liquid feed every 2–3 weeks',
    },
    {
      id: 9,
      schedule: 'Citrus fertiliser in spring, midsummer, and early autumn',
    },
    {
      id: 10,
      schedule: 'Fruit tree fertiliser in early spring and midsummer',
    },
    {
      id: 11,
      schedule: 'High-potassium feed every 2–4 weeks during fruiting',
    },
    {
      id: 12,
      schedule:
        'High-nitrogen feed early, then high-potassium once flowering begins',
    },
    {
      id: 13,
      schedule:
        'Apply balanced fertiliser in early spring; add high-potassium feed during flowering and fruit development; mulch annually with compost or well-rotted manure',
    },
  ])
}
