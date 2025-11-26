import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import { PlantData } from './../../models/plant'
import { Card, CardContent } from './card'

export default function PlantGuide() {
  const { id } = useParams()
  const navigate = useNavigate()

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
    console.log(`Added ${plant.name} (id: ${plant.id}) to garden`)
  }

  return (
    <div className="mx-auto mt-24 max-w-5xl px-4 md:px-8">
      <div className="mb-10 flex justify-between">
        <button
          onClick={() => navigate('/plants')}
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
      </div>

      <Card className="shadow-lg">
        <CardContent className="flex flex-col items-start gap-10 py-8 md:flex-row">
          <div className="flex-1">
            <h1 className="mb-2 text-4xl font-bold">{plant.name}</h1>
            <em className="mb-4 block text-gray-600">{plant.scientificName}</em>
            <p className="leading-relaxed text-gray-800">{plant.description}</p>
          </div>

          <img
            src={plant.image}
            alt={plant.name}
            className="w-full rounded-lg object-cover shadow-md md:w-80"
          />
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardContent className="flex flex-col items-start gap-10 py-8 md:flex-row">
          <img
            src={plant.image2 || plant.image}
            alt="Growing Conditions"
            className="w-full rounded-lg object-cover p-2 shadow-md md:w-72"
          />

          <div className="flex-1 space-y-6 pl-4 md:pl-8">
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

      <Card className="shadow-lg">
        <CardContent className="flex flex-col items-start gap-10 py-8 md:flex-row">
          <div className="flex-1 space-y-6">
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
                <strong>Yield min:</strong> {plant.yieldPerPlantMin}
              </p>
              <p>
                <strong>Yield max:</strong> {plant.yieldPerPlantMax}
              </p>
            </div>
          </div>

          <img
            src={plant.image3 || plant.image}
            alt="Harvest"
            className="w-full rounded-lg object-cover shadow-md md:w-80"
          />
        </CardContent>
      </Card>
    </div>
  )
}
