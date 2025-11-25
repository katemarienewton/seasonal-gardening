import { useNavigate } from 'react-router'
import { useTestAuth } from '../hooks/useTestAuth'
import { useUserGarden } from '../hooks/useUserGarden'

import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'


export default function ManageMyGarden() {
  const navigate = useNavigate()
  const { user } = useTestAuth() // should be creating error as we are not using the user - will change once we are linkong auth0

  const userId = 1 // TEMP during FakeAuth Mode — replace with user.id when we are ready to roll out the full program

  const gardenQuery = useUserGarden(userId)

  if (gardenQuery.isLoading) return <p>Loading your plants in your stash...</p>
  if (gardenQuery.isError) return <p>Error loading your personal garden.</p>

  const plants = gardenQuery.data

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <ThemedH1 className="mb-4 text-left">Manage My Garden</ThemedH1>

      <ThemedText className="mb-8 text-left">
        These are the plants you’ve added to your garden.
      </ThemedText>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {plants.map((plant: any) => (
          <article
            key={plant.id}
            className="flex h-full flex-col rounded-2xl bg-[#f5f2ed] p-5 shadow-md"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="mb-4 h-64 w-full rounded-xl object-cover"
            />

            <div className="flex flex-1 flex-col gap-2">
              <ThemedH1 className="text-left">{plant.name}</ThemedH1>

              <ThemedText className="text-left">
                {plant.description}
              </ThemedText>
            </div>

            <button
              className="mt-4 self-start text-sm font-semibold text-[#2f2f2f] hover:underline"
              onClick={() => navigate(`/plants/${plant.id}`)}
            >
              View details →
            </button>
          </article>
        ))}
      </div>
    </main>
  )
}
