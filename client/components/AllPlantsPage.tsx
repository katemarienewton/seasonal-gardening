import Navbar from '../components/Navbar'
import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import Spacer from '../components/theme/Spacer'
import { Vegetables } from '../../models/vegetables'

const plants: Vegetables[] = [
  {
    id: 1,
    name: 'Potatoes',
    scientific_name: 'Solanum tuberosum',
    description: 'Tuberous crop grown underground; staple in many gardens.',
    soil_id: 1,
    spacing_id: 1,
    requirements_id: 1,
    feeding_id: 1,
    staking_id: 1,
    days_to_harvest_min: 90,
    days_to_harvest_max: 120,
    yield_per_plant_min: 1,
    yield_per_plant_max: 3,
    storage: 'Cool (10–15°C), dark, 2–4 months',
    image: '/potato.webp', // put these in /public
  },
  {
    id: 2,
    name: 'Onions',
    scientific_name: 'Allium cepa',
    description:
      'Bulb vegetable grown from sets or seeds; great for long-term storage.',
    soil_id: 5,
    spacing_id: 2,
    requirements_id: 2,
    feeding_id: 2,
    staking_id: 1,
    days_to_harvest_min: 120,
    days_to_harvest_max: 150,
    yield_per_plant_min: 0.1,
    yield_per_plant_max: 0.4,
    storage: 'Dry, ventilated space, keeps for months',
    image: '/onion.webp',
  },
  {
    id: 3,
    name: 'Pumpkin / Squash',
    scientific_name: 'Cucurbita pepo',
    description:
      'Vining plant producing large, sweet fruit; excellent for winter storage.',
    soil_id: 3,
    spacing_id: 3,
    requirements_id: 3,
    feeding_id: 3,
    staking_id: 1,
    days_to_harvest_min: 90,
    days_to_harvest_max: 130,
    yield_per_plant_min: 2,
    yield_per_plant_max: 5,
    storage: 'Cure 7–10 days, then store 2–4 months in a cool, dry place',
    image: '/pumpkin.webp',
  },
]

export default function GetAllPlants() {
  return (
    <>
      <Navbar />
      {/* Spacer if your header/nav stack over content */}
      <Spacer />

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <ThemedH1 className="mb-8 text-center">Garden Vegetables</ThemedH1>

        {/* 3-column grid on large screens, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plants.map((veg) => (
            <article
              key={veg.id}
              className="flex flex-col items-center rounded-2xl bg-[#f5f2ed] p-5 text-center shadow-md"
            >
              <img
                src={veg.image}
                alt={veg.name}
                className="mb-4 h-40 w-40 rounded-xl object-cover"
              />

              <ThemedH1 className="mb-1 text-[clamp(18px,3vw,22px)]">
                {veg.name}
              </ThemedH1>

              <ThemedText className="mb-2 text-[clamp(12px,2.5vw,16px)] italic">
                {veg.scientific_name}
              </ThemedText>

              <ThemedText className="mb-2 text-[clamp(12px,2.5vw,16px)]">
                {veg.description}
              </ThemedText>

              <ThemedText className="text-[clamp(11px,2.3vw,14px)]">
                {veg.storage}
              </ThemedText>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
