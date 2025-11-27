import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import { PlantData } from './../../models/plant'
import { Card, CardContent } from './card'
import { useLocation } from 'react-router-dom'
import ThemedH1 from './theme/ThemedHeader'
import ThemedText from './theme/ThemedText'

export default function PlantGuide() {
  const { id } = useParams()
  const navigate = useNavigate()

  const location = useLocation()
  const state = location.state as { regionName?: string; month?: string }

  const regionName = state?.regionName || 'your region'
  const month = state?.month || 'this month'

  const {
    data: plant,
    isLoading,
    isError,
  } = useQuery<PlantData>({
    queryKey: ['plantGuide', id],
    queryFn: async () => {
      const res = await fetch(`/api/v1/vegetables/${id}`)
      if (!res.ok) throw new Error('Plant guide not found')
      return res.json()
    },
  })

  if (isLoading)
    return <p className="mt-24 text-center">Loading planting guide...</p>
  if (isError || !plant)
    return <p className="mt-24 text-center">Guide not found.</p>

  const handleAddToGarden = () => {
    const existing = JSON.parse(localStorage.getItem('myGarden') || '[]')
    const alreadyAdded = existing.some((p: PlantData) => p.id === plant.id)

    if (!alreadyAdded) {
      existing.push(plant)
      localStorage.setItem('myGarden', JSON.stringify(existing))
    }

    navigate('/my-garden')
  }

  return (
    <main>
      <ThemedH1 className="mb-4 text-left">
        You&apos;ve selected to grow {plant.name} in {regionName} in {month}.
      </ThemedH1>

      <ThemedText className="mb-10 text-left">
        Here&apos;s some tips and tricks for this growing season:
      </ThemedText>

      {/* <div className="mb-10 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="rounded-full bg-[#e3ead4] px-8 py-3 text-sm font-semibold text-[#2f2f2f] shadow-md transition hover:bg-[#c8d3b3]"
        >
          ← Back to list
        </button>

        <button
          onClick={handleAddToGarden}
          className="rounded-full bg-[#e3ead4] px-8 py-3 text-sm font-semibold text-[#2f2f2f] shadow-md transition hover:bg-[#c8d3b3]"
        >
          + Add to My Garden
        </button>
      </div> */}

      <Card className="mb-8 overflow-hidden rounded-lg border-0 bg-[#f5f1ed] shadow-none">
        <CardContent className="flex flex-col gap-8 p-0 md:flex-row">
          <div className="flex-1 space-y-6 p-8">
            <h1 className="mb-2 text-4xl font-bold">{plant.name}</h1>
            <em className="mb-4 block text-gray-600">{plant.scientificName}</em>
            <p className="leading-relaxed text-gray-800">{plant.description}</p>
          </div>
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full rounded-lg  object-cover md:w-[400px]"
          />
        </CardContent>
      </Card>

      <Card className="mb-8 overflow-hidden rounded-lg border-0 bg-[#f5f1ed] shadow-none">
        <CardContent className="flex flex-col gap-8 p-0 md:flex-row">
          <div className="flex flex-shrink-0 md:h-auto md:w-[400px]">
            <img
              src={plant.image2 || plant.image}
              alt="Growing Conditions"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>

          <div className="flex-1 space-y-6 p-8">
            <div>
              <h2 className="mb-2 text-2xl font-semibold">Soil</h2>
              <p>
                <strong>Type:</strong> {plant.soilType}
              </p>
              <p>
                <strong>Preparation:</strong> {plant.soilPreparation}
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-semibold">Spacing</h2>
              <p>
                <strong>Row spacing:</strong> {plant.spacingRowCm} cm
              </p>
              <p>
                <strong>Plant spacing:</strong> {plant.spacingPlantCm} cm
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-semibold">Requirements</h2>
              <p>
                <strong>Sun:</strong> {plant.requirementsSun}
              </p>
              <p>
                <strong>Water:</strong> {plant.requirementsWater}
              </p>
              <p>
                <strong>Germination:</strong> {plant.requirementsGermination}
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-semibold">Feeding</h2>
              <p>{plant.feedingSchedule}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 overflow-hidden rounded-lg border-0 bg-[#f5f1ed] shadow-none">
        <CardContent className="flex flex-col gap-8 p-0 md:flex-row">
          {/* LEFT — TEXT with padding */}
          <div className="flex-1 space-y-6 p-8">
            <div>
              <h2 className="mb-2 text-2xl font-semibold">Staking</h2>
              <p>
                <strong>Required?</strong> {plant.stakingRequired}
              </p>
              <p>{plant.stakingNotes}</p>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-semibold">Harvest</h2>
              <p>
                <strong>Min days:</strong> {plant.daysToHarvestMin}
              </p>
              <p>
                <strong>Max days:</strong> {plant.daysToHarvestMax}
              </p>
              <p>
                <strong>Yield min:</strong> {plant.yieldPerPlantMin} kg
              </p>
              <p>
                <strong>Yield max:</strong> {plant.yieldPerPlantMax} kg
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-semibold">Storage</h2>
              <p>{plant.storage}</p>
            </div>
          </div>

          {/* RIGHT — IMAGE filling full height */}
          <div className="flex flex-shrink-0 md:h-auto md:w-[400px]">
            <img
              src={plant.image3 || plant.image}
              alt="Harvest"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
