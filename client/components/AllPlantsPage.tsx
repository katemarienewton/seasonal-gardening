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
    image: '/potato.webp',
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
      <Spacer />

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <ThemedH1 className="mb-4 text-left">
          You&apos;ve selected Taranaki in November.
        </ThemedH1>

        <ThemedText className="mb-8 text-left">
          This month you can plant:
        </ThemedText>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plants.map((veg) => (
            <article
              key={veg.id}
              className="flex h-full flex-col rounded-2xl bg-[#f5f2ed] p-5 shadow-md"
            >
              <img
                src={veg.image}
                alt={veg.name}
                className="mb-4 h-64 w-full rounded-xl object-cover"
              />
              <div className="flex flex-1 flex-col gap-2">
                <ThemedH1 className="text-left">{veg.name}</ThemedH1>

                <ThemedText className="text-left">{veg.description}</ThemedText>
              </div>

              <button className="mt-4 self-start text-sm font-semibold text-[#2f2f2f] hover:underline">
                Click to learn more →
              </button>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
