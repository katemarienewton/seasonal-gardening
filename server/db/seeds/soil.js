export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('soil').del()

  // Inserts seed entries
  await knex('soil').insert([
    {
      id: 1,
      type: 'Loamy, well-drained fertile soil',
      preparation: 'Add compost or well-rotted manure before planting',
    },
    {
      id: 2,
      type: 'Sandy, free-draining soil',
      preparation: 'Incorporate organic matter to improve fertility',
    },
    {
      id: 3,
      type: 'Heavy loam / clay-loam',
      preparation: 'Work in compost and possibly form raised beds for drainage',
    },
    {
      id: 4,
      type: 'Rich organic garden soil',
      preparation: 'Mix in compost, clear stones, level the bed',
    },
    {
      id: 5,
      type: 'Slightly acidic fertile soil',
      preparation: 'Test pH; add lime if needed, then compost',
    },
    {
      id: 6,
      type: 'Acidic, free-draining sandy loam',
      preparation:
        'Incorporate peat moss or pine bark to lower pH for acid-loving plants',
    },
    {
      id: 7,
      type: 'Fertile, moist well-drained garden soil',
      preparation: 'Add compost annually and mulch to retain moisture',
    },
    {
      id: 8,
      type: 'Light, fertile soil with good drainage',
      preparation: 'Mix in compost and ensure soil is not compacted',
    },
    {
      id: 9,
      type: 'Warm, sandy loam',
      preparation:
        'Raise beds or mounds to improve heat retention and drainage',
    },
    {
      id: 10,
      type: 'Rich, moisture-retentive soil',
      preparation: 'Add compost and mulch thickly to maintain moisture',
    },
  ])
}
