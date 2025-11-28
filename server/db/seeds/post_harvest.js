export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('post_harvest').del()

  // Inserts seed entries
  await knex('post_harvest').insert([
    // Potatoes
    {
      id: 1,
      vege_id: 1,
      preservation:
        'Store whole potatoes in a dark, ventilated area; dehydrate into potato flakes for long-term storage; vacuum-seal slices for freezing; can also make potato chips or mash for freezer storage.',
      recipe_ideas: 'Soups, potato mash, gnocchi, potato bake, hash browns.',
    },

    // Onions
    {
      id: 2,
      vege_id: 2,
      preservation:
        'Freeze chopped onions, dehydrate for long-term use, pickle in vinegar, or store whole bulbs in mesh bags in a cool dark place.',
      recipe_ideas: 'Caramelised onions, onion jam, onion confit.',
    },

    // Pumpkin / Squash
    {
      id: 3,
      vege_id: 3,
      preservation:
        'Freeze cubes or puree, roast and freeze, preserve in jars as pumpkin jam or pumpkin soup, or dehydrate slices.',
      recipe_ideas:
        'Pumpkin soup, pumpkin puree, roasted pumpkin sauce, pumpkin curry, pumpkin pie.',
    },

    // Broccoli
    {
      id: 4,
      vege_id: 4,
      preservation:
        'Blanch and freeze florets, make broccoli pesto and freeze, steam and vacuum-seal for long-term use.',
      recipe_ideas: 'Stir-fries, soups, broccoli pesto.',
    },

    // Cauliflower
    {
      id: 5,
      vege_id: 5,
      preservation:
        'Blanch and freeze, pickle florets, make cauliflower rice and freeze, or preserve in creamy sauces in jars.',
      recipe_ideas: 'Cauliflower rice, soups, pickled cauliflower.',
    },

    // Cabbage
    {
      id: 6,
      vege_id: 6,
      preservation:
        'Ferment into sauerkraut or kimchi, freeze cooked cabbage, or pickle in jars for long-term storage',
      recipe_ideas: 'Sauerkraut, Kimchi, coleslaw, cabbage soup.',
    },

    // Lettuce
    {
      id: 7,
      vege_id: 7,
      preservation:
        'Limited long-term preservation; can be dried and crushed into powder for seasoning or freeze chopped lettuce for soups/smoothies',
      recipe_ideas: 'Salads, lettuce soup, lettuce wraps.',
    },

    // Spinach
    {
      id: 8,
      vege_id: 8,
      preservation:
        'Blanch and freeze leaves, make spinach puree for freezing, or dry leaves for powder.',
      recipe_ideas: 'Spinach pesto, smoothies, spinach soup.',
    },

    // Silverbeet / Swiss Chard
    {
      id: 9,
      vege_id: 9,
      preservation:
        'Blanch and freeze, sauté and freeze, or dry leaves for powder to use in soups.',
      recipe_ideas: 'Silverbeet pie, stir-fry mixes, soups.',
    },

    // Kale
    {
      id: 10,
      vege_id: 10,
      preservation:
        'Blanch and freeze, make kale chips, dry leaves into powder for soups and smoothies.',
      recipe_ideas: 'Kale chips, smoothies, kale pesto.',
    },

    // Peas
    {
      id: 11,
      vege_id: 11,
      preservation:
        'Shell and freeze, can into pea puree or soups, or pickle pods.',
      recipe_ideas: 'Pea soup, frozen vegetable mixes, pea purée, risotto',
    },

    // Green Beans
    {
      id: 12,
      vege_id: 12,
      preservation: 'Blanch and freeze, can or pickle for long-term storage.',
      recipe_ideas:
        'Pickled beans, frozen bean mixes, stir-fries, baked beans.',
    },

    // Carrots
    {
      id: 13,
      vege_id: 13,
      preservation:
        'Freeze slices or sticks, make carrot puree for soups or baby food, pickle, or dehydrate for chips.',
      recipe_ideas: 'Carrot soup, carrot puree, carrot pickles, carrot cake.',
    },

    // Beetroot
    {
      id: 14,
      vege_id: 14,
      preservation:
        'Freeze cooked slices, pickle, make beetroot jam, or roast and vacuum-seal.',
      recipe_ideas:
        'Beetroot relish, roasted beet dips, beet soup, beetroot hummus.',
    },

    // Parsnips
    {
      id: 15,
      vege_id: 15,
      preservation:
        'Freeze cooked slices or mash, dehydrate slices, or vacuum-seal cooked parsnips.',
      recipe_ideas: 'Parsnip soup, mash, roasted parsnip puree.',
    },

    // Kumara
    {
      id: 16,
      vege_id: 16,
      preservation:
        'Freeze roasted or boiled slices, mash and freeze, make chips, or store as puree.',
      recipe_ideas: 'Kumara mash, soups, kumara chips, roasted kumara.',
    },

    // Tomatoes
    {
      id: 17,
      vege_id: 17,
      preservation:
        'Freeze whole, chopped, or as puree; can into sauces or salsas; dry or sun-dry for long-term use.',
      recipe_ideas: 'Tomato paste, roasted tomato sauce, salsa, chutney.',
    },

    // Bell Peppers / Capsicum
    {
      id: 18,
      vege_id: 18,
      preservation: 'Freeze sliced or roasted, pickle, or dry for powder.',
      recipe_ideas: 'Stuffed peppers, pepper relish, roasted pepper sauce.',
    },

    // Cucumbers
    {
      id: 19,
      vege_id: 19,
      preservation:
        'Pickle, ferment, or make cucumber relish; freeze sliced (texture changes)',
      recipe_ideas:
        'Salads, tzatziki, pickles, cold soups, fermented cucumbers.',
    },

    // Turnips
    {
      id: 20,
      vege_id: 20,
      preservation:
        'Freeze cooked slices, pickle, ferment, or mash and freeze.',
      recipe_ideas: 'Roasted turnips, soups, mash, gratins, pickled turnips.',
    },

    // Apples
    {
      id: 21,
      vege_id: 21,
      preservation:
        'Freeze slices with lemon juice, make applesauce or apple butter, dry slices, or make syrup/jams.',
      recipe_ideas:
        'Apple pie, apple crumble, baked apples, apple sauce, apple muffins, smoothies.',
    },

    // Avocado
    {
      id: 22,
      vege_id: 22,
      preservation:
        'Freeze mashed avocado with lemon juice, make guacamole and freeze, or preserve in oil for spreads.',
      recipe_ideas:
        'Guacamole, avocado toast, smoothies, salads, avocado pasta sauce.',
    },

    // Basil
    {
      id: 23,
      vege_id: 23,
      preservation:
        'Freeze leaves whole or in oil cubes, dry leaves for long-term use, or make pesto and freeze.',
      recipe_ideas:
        'Pesto, caprese salad, pasta sauces, soups, basil-infused oil.',
    },

    // Blueberry
    {
      id: 24,
      vege_id: 24,
      preservation:
        'Freeze whole berries, make jams or compotes, or dehydrate for long-term use.',
      recipe_ideas:
        'Blueberry muffins, smoothies, pies, pancakes, jams, fruit sauces.',
    },

    // Chives
    {
      id: 25,
      vege_id: 25,
      preservation:
        'Freeze chopped stems, dry for seasoning, or mix with butter for frozen herb cubes.',
      recipe_ideas:
        'Garnish for soups, omelettes, salads, dips, baked potatoes, herb butter.',
    },

    // Coriander
    {
      id: 26,
      vege_id: 26,
      preservation:
        'Freeze chopped, dry leaves for spice, dry seeds, or make coriander paste and freeze.',
      recipe_ideas: 'Coriander paste, chutney, herb butters, soups.',
    },

    // Mint
    {
      id: 27,
      vege_id: 27,
      preservation:
        'Freeze chopped or whole leaves, dry for tea or seasoning, make mint syrup or paste.',
      recipe_ideas:
        'Mint syrup, mint pesto, infused water, mint tea, chutneys.',
    },

    // Parsley
    {
      id: 28,
      vege_id: 28,
      preservation:
        'Freeze chopped leaves, dry for seasoning, or make parsley paste for long-term storage.',
      recipe_ideas: 'Tabbouleh, herb butter, parsley pesto, soups.',
    },

    // Sage
    {
      id: 29,
      vege_id: 29,
      preservation:
        'Hang to dry leaves for long term storage, freeze leaves in butter or oil, or make sage salt.',
      recipe_ideas: 'Sage butter, herb rubs, sauces, stuffing.',
    },

    // Strawberry
    {
      id: 30,
      vege_id: 30,
      preservation:
        'Freeze whole or sliced, make jams or preserves, dehydrate for long-term use.',
      recipe_ideas:
        'Strawberry smoothies, tarts, salads, jams, desserts, fruit sauces.',
    },

    // Watermelon
    {
      id: 31,
      vege_id: 31,
      preservation:
        'Freeze cubes, make watermelon juice or sorbet, or pickle rinds.',
      recipe_ideas:
        'Watermelon salad, smoothies, sorbet, juices, grilled watermelon.',
    },

    // Feijoa
    {
      id: 32,
      vege_id: 32,
      preservation: 'Freeze pulp, make jams or sauces, or dehydrate slices.',
      recipe_ideas: 'Feijoa crumble, smoothies, jams, sauces, desserts.',
    },

    // Garlic
    {
      id: 33,
      vege_id: 33,
      preservation:
        'Freeze peeled cloves, make garlic paste and freeze, or pickle cloves in oil/vinegar.',
      recipe_ideas:
        'Garlic butter, roasted garlic, soups, stir-fries, sauces, dressings.',
    },

    // Lemon
    {
      id: 34,
      vege_id: 34,
      preservation:
        'Freeze juice or zest, preserve in salt or sugar, make lemon curd, or can slices in syrup.',
      recipe_ideas:
        'Lemonade, lemon tart, marinades, salad dressings, lemon cake.',
    },

    // Orange
    {
      id: 35,
      vege_id: 35,
      preservation:
        'Freeze juice, make marmalade, dry zest or slices for flavoring, or can segments in syrup.',
      recipe_ideas:
        'Orange juice, marmalade, cakes, salads, sauces, smoothies, candied orange.',
    },

    // Peaches
    {
      id: 36,
      vege_id: 36,
      preservation:
        'Freeze slices, make peach jam or compote, or dry for long-term storage.',
      recipe_ideas:
        'Peach crumble, smoothies, peach jam, pies, roasted peaches, salads.',
    },
  ])
}
