import { useNavigate } from 'react-router'
import { useTestAuth } from '../hooks/useTestAuth'
import { useUserGarden } from '../hooks/useUserGarden'
import { Link } from 'react-router-dom'

import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import FadeImg from '../components/theme/FadeImg'

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
        You are currently growing:
      </ThemedText>

      {plants.length === 0 ? (
        <ThemedText>No plants in your garden yet.</ThemedText>
      ) : (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plants.map((plant: any) => (
            <article
              key={plant.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-[#f5f2ed] shadow-md"
            >
              <div className="aspect-[3/2] w-full bg-[url(/public/assets/plant.png)] bg-contain bg-center bg-no-repeat">
                <FadeImg
                  src={plant.image}
                  alt={plant.name}
                  className="aspect-[3/2] object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex flex-col gap-2">
                  <ThemedH1 className="text-left text-xl">
                    {plant.name}
                  </ThemedH1>

                  <ThemedText className="text-left">
                    {plant.description}
                  </ThemedText>
                </div>

                {/* <Link
                  to={`/plant/${plant.id}/guide`}
                  state={{ regionName, month: monthFull }}
                >
                  Click to learn more →
                </Link> */}
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
      )}
    </main>
  )
}
