import { useNavigate } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'
import {
  useUserGarden,
  useRemoveFromGarden,
  GardenPlant,
} from '../hooks/useUserGarden'

import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import Spacer from '../components/theme/Spacer'

export default function ManageMyGarden() {
  const navigate = useNavigate()
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  // Hooks must be called unconditionally
  const gardenQuery = useUserGarden()
  const removeMutation = useRemoveFromGarden()

  // Redirect unauthenticated users *after* hooks run
  if (!isAuthenticated) {
    loginWithRedirect()
    return <p>Redirecting to login...</p>
  }

  if (gardenQuery.isLoading) return <p>Loading your garden...</p>
  if (gardenQuery.isError) return <p>Failed to load your garden.</p>

  const plants = gardenQuery.data || []

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <ThemedH1 className="mb-4 text-left">Manage My Garden</ThemedH1>

      <ThemedText className="mb-8 text-left">
        These are the plants you have added to your garden.
      </ThemedText>

      <Spacer className="h-4" />

      {plants.length === 0 && (
        <p className="text-lg text-gray-600">Your garden is empty.</p>
      )}

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {plants.map((plant: GardenPlant) => (
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
              <ThemedText className="text-left">{plant.description}</ThemedText>
            </div>

            <div className="mt-4 flex gap-4">
              <button
                className="text-sm font-semibold text-[#2f2f2f] hover:underline"
                onClick={() => navigate(`/plant/${plant.id}`)}
              >
                View details →
              </button>

              <button
                className="text-sm font-semibold text-red-600 hover:underline"
                onClick={() => removeMutation.mutate(plant.id)}
              >
                Remove ✖
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
