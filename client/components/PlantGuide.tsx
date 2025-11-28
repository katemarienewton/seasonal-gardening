import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import { PlantData } from './../../models/plant'
import { Card, CardContent } from './card'
import { useLocation } from 'react-router-dom'
import ThemedH1 from './theme/ThemedHeader'
import ThemedText from './theme/ThemedText'
import FadeImg from './theme/FadeImg'

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

      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <ThemedText className="mb-10 text-left">
          Here&apos;s some tips and tricks for this growing season:
        </ThemedText>

        <button
          onClick={handleAddToGarden}
          className="
      rounded-[40px]
      bg-[#e8e6e1]
      px-6
      py-3
      text-center
      text-[clamp(14px,3vw,20px)]
      font-semibold
      text-[#2f2f2f]
      transition
      hover:bg-[#dcd8ce]
    "
        >
          + Add to My Garden
        </button>
      </div>

      {/* <button
          onClick={() => navigate(-1)}
          className="rounded-full bg-[#e3ead4] px-8 py-3 text-sm font-semibold text-[#2f2f2f] shadow-md transition hover:bg-[#c8d3b3]"
        >
          ← Back to list
        </button> */}

      <Card className="mb-8 overflow-hidden rounded-lg border-0 bg-[#f5f1ed] shadow-none">
        <CardContent className="grid grid-cols-[1fr_16px_1fr] gap-4 p-0">
          <div className="flex flex-1 flex-col justify-center space-y-6">
            <h1 className="mb-2 text-4xl font-bold">{plant.name}</h1>
            <em className="mb-4 block text-gray-600">{plant.scientificName}</em>
            <p className="leading-relaxed text-gray-800">{plant.description}</p>
          </div>

          <div className="w-full bg-[#f5f1ed]"></div>

          <div className="flex">
            <FadeImg
              src={plant.image}
              alt={plant.name}
              className="w-full rounded-lg object-cover"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 overflow-hidden rounded-lg border-0 bg-[#f5f1ed] shadow-none">
        <CardContent className="grid grid-cols-[1fr_16px_1fr] gap-4 p-0">
          <div className="flex flex-shrink-0 md:h-auto md:w-full">
            <FadeImg
              src={plant.image2 || plant.image}
              alt="Growing Conditions"
              className="w-full rounded-lg object-cover"
            />
          </div>

          <div className="w-full bg-[#f5f1ed]"></div>

          <div className="flex flex-1 flex-col justify-center space-y-6 py-8">
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold">Soil</h2>
              <dl className="leading-relaxed">
                <strong>Type</strong>
                <dd>{plant.soilType}</dd>
                <strong>Preparation</strong>
                <dd>{plant.soilPreparation}</dd>
              </dl>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-semibold">Spacing</h2>
              <p>
                <strong>Row spacing:</strong> {plant.spacingRowCm} cm
              </p>
              <p>
                <strong>Plant spacing:</strong> {plant.spacingPlantCm} cm
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold">Requirements</h2>
              <dl className="leading-relaxed">
                <strong>Sun</strong>
                <dd>{plant.requirementsSun}</dd>
                <strong>Water</strong>
                <dd>{plant.requirementsWater}</dd>
                <strong>Germination</strong>
                <dd>{plant.requirementsGermination}</dd>
              </dl>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold">Feeding</h2>
              <p className="leading-relaxed">{plant.feedingSchedule}</p>
            </section>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 overflow-hidden rounded-lg border-0 bg-[#f5f1ed] shadow-none">
        <CardContent className="grid grid-cols-[1fr_16px_1fr] gap-4 p-0">
          <div className="flex flex-1 flex-col justify-center space-y-6">
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold">Staking</h2>
              <p>
                {plant.stakingRequired
                  ? 'Staking required.'
                  : 'Staking not required.'}
              </p>
              {plant.stakingNotes && <p>{plant.stakingNotes}</p>}
            </section>

            <section>
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
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold">Storage</h2>
              <p>{plant.storage}</p>
            </section>
          </div>

          <div className="w-full bg-[#f5f1ed]"></div>

          <div className="flex flex-shrink-0 md:h-auto md:w-full">
            <FadeImg
              src={plant.image3 || plant.image}
              alt="Harvest"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
