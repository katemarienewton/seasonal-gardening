export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('variety').del()

  // Inserts seed entries
  await knex('variety').insert([
    {
      id: 1,
      vege_id: '1',
      name: 'Kennebec',
      notes: 'Common cultivar: Kennebec',
    },
    {
      id: 2,
      vege_id: '1',
      name: 'Agria',
      notes: 'Common cultivar: Agria',
    },
    {
      id: 3,
      vege_id: '1',
      name: 'Desiree',
      notes: 'Common cultivar: Desiree',
    },
    {
      id: 4,
      vege_id: '2',
      name: 'Red Burgundy',
      notes: 'Common cultivar: Red Burgundy',
    },
    {
      id: 5,
      vege_id: '2',
      name: 'White Lisbon',
      notes: 'Common cultivar: White Lisbon',
    },
    {
      id: 6,
      vege_id: '2',
      name: 'Brown Spanish',
      notes: 'Common cultivar: Brown Spanish',
    },
    {
      id: 7,
      vege_id: '3',
      name: 'Butternut',
      notes: 'Common cultivar: Butternut',
    },
    {
      id: 8,
      vege_id: '3',
      name: 'Queensland Blue',
      notes: 'Common cultivar: Queensland Blue',
    },
    {
      id: 9,
      vege_id: '3',
      name: 'Hokkaido',
      notes: 'Common cultivar: Hokkaido',
    },
    {
      id: 10,
      vege_id: '4',
      name: 'Calabrese',
      notes: 'Common cultivar: Calabrese',
    },
    {
      id: 11,
      vege_id: '4',
      name: 'Belstar',
      notes: 'Common cultivar: Belstar',
    },
    {
      id: 12,
      vege_id: '4',
      name: 'Purple Sprouting',
      notes: 'Common cultivar: Purple Sprouting',
    },
    {
      id: 13,
      vege_id: '5',
      name: 'Snowball Y',
      notes: 'Common cultivar: Snowball Y',
    },
    {
      id: 14,
      vege_id: '5',
      name: 'Graffiti',
      notes: 'Common cultivar: Graffiti',
    },
    {
      id: 15,
      vege_id: '5',
      name: 'Cheddar',
      notes: 'Common cultivar: Cheddar',
    },
    {
      id: 16,
      vege_id: '6',
      name: 'Golden Acre',
      notes: 'Common cultivar: Golden Acre',
    },
    {
      id: 17,
      vege_id: '6',
      name: 'Red Drumhead',
      notes: 'Common cultivar: Red Drumhead',
    },

    {
      id: 18,
      vege_id: '6',
      name: 'Brunswick',
      notes: 'Common cultivar: Brunswick',
    },
    {
      id: 19,
      vege_id: '7',
      name: 'Buttercrunch',
      notes: 'Common cultivar: Buttercrunch',
    },
    {
      id: 20,
      vege_id: '7',
      name: 'Cos/Romaine',
      notes: 'Common cultivar: Cos/Romaine',
    },
    {
      id: 21,
      vege_id: '7',
      name: 'Oakleaf',
      notes: 'Common cultivar: Oakleaf',
    },
    {
      id: 22,
      vege_id: '8',
      name: 'Bloomsdale',
      notes: 'Common cultivar: Bloomsdale',
    },

    {
      id: 24,
      vege_id: '8',
      name: 'Tyee',
      notes: 'Common cultivar: Tyee',
    },
    {
      id: 25,
      vege_id: '8',
      name: 'Giant Winter',
      notes: 'Common cultivar: Giant Winter',
    },
    {
      id: 26,
      vege_id: '9',
      name: 'Bright Lights',
      notes: 'Common cultivar: Bright Lights',
    },
    {
      id: 27,
      vege_id: '9',
      name: 'Fordhook Giant',
      notes: 'Common cultivar: Fordhook Giant',
    },
    {
      id: 28,
      vege_id: '9',
      name: 'Perpetual Spinach',
      notes: 'Common cultivar: Perpetual Spinach',
    },
    {
      id: 29,
      vege_id: '10',
      name: 'Winterbor',
      notes: 'Common cultivar: Winterbor',
    },

    {
      id: 30,
      vege_id: '10',
      name: 'Curly Kale',
      notes: 'Common cultivar: Curly Kale',
    },
    {
      id: 31,
      vege_id: '11',
      name: 'Sugar Snap',
      notes: 'Common cultivar: Sugar Snap',
    },
    {
      id: 32,
      vege_id: '11',
      name: 'Oregon Giant',
      notes: 'Common cultivar: Oregon Giant',
    },
    {
      id: 33,
      vege_id: '11',
      name: 'Green Arrow',
      notes: 'Common cultivar: Green Arrow',
    },
    {
      id: 34,
      vege_id: '12',
      name: 'Blue Lake',
      notes: 'Common cultivar: Blue Lake',
    },
    {
      id: 35,
      vege_id: '12',
      name: 'Scarlet Runner',
      notes: 'Common cultivar: Scarlet Runner',
    },
    {
      id: 36,
      vege_id: '12',
      name: 'Broad Windsor',
      notes: 'Common cultivar: Broad Windsor',
    },
    {
      id: 37,
      vege_id: '13',
      name: 'Nantes',
      notes: 'Common cultivar: Nantes',
    },
    {
      id: 38,
      vege_id: '13',
      name: 'Chantenay',
      notes: 'Common cultivar: Chantenay',
    },
    {
      id: 39,
      vege_id: '13',
      name: 'Imperator',
      notes: 'Common cultivar: Imperator',
    },
    {
      id: 40,
      vege_id: '14',
      name: 'Detroit Dark Red',
      notes: 'Common cultivar: Detroit Dark Red',
    },
    {
      id: 41,
      vege_id: '14',
      name: 'Boltardy',
      notes: 'Common cultivar: Boltardy',
    },
    {
      id: 42,
      vege_id: '14',
      name: 'Chioggia',
      notes: 'Common cultivar: Chioggia',
    },
    {
      id: 43,
      vege_id: '15',
      name: 'Javelin',
      notes: 'Common cultivar: Javelin',
    },
    {
      id: 44,
      vege_id: '15',
      name: 'Gladiator',
      notes: 'Common cultivar: Gladiator',
    },
    {
      id: 45,
      vege_id: '15',
      name: 'Tender and True',
      notes: 'Common cultivar: Tender and True',
    },
    {
      id: 46,
      vege_id: '16',
      name: 'Beauregard',
      notes: 'Common cultivar: Beauregard',
    },
    {
      id: 47,
      vege_id: '16',
      name: 'Owairaka Red',
      notes: 'Common cultivar: Owairaka Red',
    },
    {
      id: 48,
      vege_id: '16',
      name: 'Toka',
      notes: 'Common cultivar: Toka',
    },
    {
      id: 49,
      vege_id: '17',
      name: 'Roma',
      notes: 'Common cultivar: Roma',
    },
    {
      id: 50,
      vege_id: '17',
      name: 'Sungold',
      notes: 'Common cultivar: Sungold',
    },
    {
      id: 51,
      vege_id: '17',
      name: 'Moneymaker',
      notes: 'Common cultivar: Moneymaker',
    },
    {
      id: 52,
      vege_id: '18',
      name: 'California Wonder',
      notes: 'Common cultivar: California Wonder',
    },
    {
      id: 53,
      vege_id: '18',
      name: 'Yolo Wonder',
      notes: 'Common cultivar: Yolo Wonder',
    },
    {
      id: 54,
      vege_id: '18',
      name: 'Corno di Toro',
      notes: 'Common cultivar: Corno di Toro',
    },
    {
      id: 55,
      vege_id: '19',
      name: 'Marketmore',
      notes: 'Common cultivar: Marketmore',
    },
    {
      id: 56,
      vege_id: '19',
      name: 'Spacemaster',
      notes: 'Common cultivar: Spacemaster',
    },
    {
      id: 57,
      vege_id: '19',
      name: 'Lemon Cucumber',
      notes: 'Common cultivar: Lemon Cucumber',
    },
    {
      id: 58,
      vege_id: '20',
      name: 'Hakurei',
      notes: 'Common cultivar: Hakurei',
    },
    {
      id: 59,
      vege_id: '20',
      name: 'Purple Top White Globe',
      notes: 'Common cultivar: Purple Top White Globe',
    },
    {
      id: 60,
      vege_id: '20',
      name: 'Tokyo Cross',
      notes: 'Common cultivar: Tokyo Cross',
    },
    {
      id: 61,
      vege_id: '10',
      name: 'Red Russian',
      notes: 'Common cultivar: Red Russian',
    },
    {
      id: 62,
      vege_id: 21,
      name: 'Granny Smith',
      notes: 'Common cultivar: Granny Smith',
    },
    {
      id: 63,
      vege_id: 21,
      name: 'Royal Gala',
      notes: 'Common cultivar: Royal Gala',
    },
    {
      id: 64,
      vege_id: 21,
      name: 'Braeburn',
      notes: 'Common cultivar: Braeburn',
    },

    { id: 65, vege_id: 22, name: 'Hass', notes: 'Common cultivar: Hass' },
    { id: 66, vege_id: 22, name: 'Fuerte', notes: 'Common cultivar: Fuerte' },
    { id: 67, vege_id: 22, name: 'Bacon', notes: 'Common cultivar: Bacon' },

    {
      id: 68,
      vege_id: 23,
      name: 'Genovese',
      notes: 'Common cultivar: Genovese',
    },
    {
      id: 69,
      vege_id: 23,
      name: 'Purple Ruffles',
      notes: 'Common cultivar: Purple Ruffles',
    },
    {
      id: 70,
      vege_id: 23,
      name: 'Lemon Basil',
      notes: 'Common cultivar: Lemon Basil',
    },

    {
      id: 71,
      vege_id: 24,
      name: 'Bluecrop',
      notes: 'Common cultivar: Bluecrop',
    },
    { id: 72, vege_id: 24, name: 'Duke', notes: 'Common cultivar: Duke' },
    {
      id: 73,
      vege_id: 24,
      name: 'Chandler',
      notes: 'Common cultivar: Chandler',
    },

    {
      id: 74,
      vege_id: 25,
      name: 'Common Chives',
      notes: 'Common cultivar: Common Chives',
    },
    {
      id: 75,
      vege_id: 25,
      name: 'Garlic Chives',
      notes: 'Common cultivar: Garlic Chives',
    },
    {
      id: 76,
      vege_id: 25,
      name: 'Forescate',
      notes: 'Common cultivar: Forescate',
    },

    { id: 77, vege_id: 26, name: 'Santo', notes: 'Common cultivar: Santo' },
    { id: 78, vege_id: 26, name: 'Leisure', notes: 'Common cultivar: Leisure' },
    { id: 79, vege_id: 26, name: 'Calypso', notes: 'Common cultivar: Calypso' },

    { id: 80, vege_id: 32, name: 'Mammoth', notes: 'Common cultivar: Mammoth' },
    { id: 81, vege_id: 32, name: 'Triumph', notes: 'Common cultivar: Triumph' },
    { id: 82, vege_id: 32, name: 'Apollo', notes: 'Common cultivar: Apollo' },

    {
      id: 83,
      vege_id: 33,
      name: 'Italian Purple',
      notes: 'Common cultivar: Italian Purple',
    },
    {
      id: 84,
      vege_id: 33,
      name: 'Chesnok Red',
      notes: 'Common cultivar: Chesnok Red',
    },
    {
      id: 85,
      vege_id: 33,
      name: 'California Early',
      notes: 'Common cultivar: California Early',
    },

    { id: 86, vege_id: 34, name: 'Eureka', notes: 'Common cultivar: Eureka' },
    { id: 87, vege_id: 34, name: 'Meyer', notes: 'Common cultivar: Meyer' },
    { id: 88, vege_id: 34, name: 'Lisbon', notes: 'Common cultivar: Lisbon' },

    {
      id: 89,
      vege_id: 27,
      name: 'Spearmint',
      notes: 'Common cultivar: Spearmint',
    },
    {
      id: 90,
      vege_id: 27,
      name: 'Peppermint',
      notes: 'Common cultivar: Peppermint',
    },
    {
      id: 91,
      vege_id: 27,
      name: 'Chocolate Mint',
      notes: 'Common cultivar: Chocolate Mint',
    },

    {
      id: 92,
      vege_id: 35,
      name: 'Valencia',
      notes: 'Common cultivar: Valencia',
    },
    {
      id: 93,
      vege_id: 35,
      name: 'Washington Navel',
      notes: 'Common cultivar: Washington Navel',
    },
    {
      id: 94,
      vege_id: 35,
      name: 'Blood Orange',
      notes: 'Common cultivar: Blood Orange',
    },

    {
      id: 95,
      vege_id: 28,
      name: 'Italian Flat Leaf',
      notes: 'Common cultivar: Italian Flat Leaf',
    },
    { id: 96, vege_id: 28, name: 'Curly', notes: 'Common cultivar: Curly' },
    { id: 97, vege_id: 28, name: 'Hamburg', notes: 'Common cultivar: Hamburg' },

    { id: 98, vege_id: 36, name: 'Elberta', notes: 'Common cultivar: Elberta' },
    {
      id: 99,
      vege_id: 36,
      name: 'Redhaven',
      notes: 'Common cultivar: Redhaven',
    },
    {
      id: 100,
      vege_id: 36,
      name: "O'Henry",
      notes: "Common cultivar: O'Henry",
    },

    {
      id: 101,
      vege_id: 29,
      name: 'Common Sage',
      notes: 'Common cultivar: Common Sage',
    },
    {
      id: 102,
      vege_id: 29,
      name: 'Purple Sage',
      notes: 'Common cultivar: Purple Sage',
    },
    {
      id: 103,
      vege_id: 29,
      name: 'Berggarten',
      notes: 'Common cultivar: Berggarten',
    },

    {
      id: 104,
      vege_id: 30,
      name: 'Honeoye',
      notes: 'Common cultivar: Honeoye',
    },
    { id: 105, vege_id: 30, name: 'Albion', notes: 'Common cultivar: Albion' },
    {
      id: 106,
      vege_id: 30,
      name: 'Cambridge Favourite',
      notes: 'Common cultivar: Cambridge Favourite',
    },

    {
      id: 107,
      vege_id: 31,
      name: 'Sugar Baby',
      notes: 'Common cultivar: Sugar Baby',
    },
    {
      id: 108,
      vege_id: 31,
      name: 'Crimson Sweet',
      notes: 'Common cultivar: Crimson Sweet',
    },
    {
      id: 109,
      vege_id: 31,
      name: 'Charleston Gray',
      notes: 'Common cultivar: Charleston Gray',
    },
  ])
}
