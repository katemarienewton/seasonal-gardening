import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import { PlantData } from './../../models/plant'
import { Card, CardContent } from './card'
import { useLocation } from 'react-router-dom'
import ThemedH1 from './theme/ThemedHeader'
import ThemedText from './theme/ThemedText'
import FadeImg from './theme/FadeImg'
import { useState } from 'react'
import PlantCalculatorModal from './PlantCalculatorModal'

export default function PlantGuide() {
  const { id } = useParams()
  const navigate = useNavigate()

  const location = useLocation()
  const state = location.state as { regionName?: string; month?: string }

  const regionName = state?.regionName || 'your region'
  const month = state?.month || 'this month'
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

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

      <div
        className="mb-8 flex gap-4
      "
      >
        <button
          onClick={() => navigate(-1)}
          className="gap-4
      rounded-[40px]
      bg-[#e8e6e1]
      px-6
      py-3
      text-center
      text-[clamp(14px,3vw,20px)]
      font-semibold
      text-[#2f2f2f]
      transition hover:bg-[#dcd8ce]"
        >
          ← Back to List
        </button>

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
              className="w-full rounded-lg object-cover shadow-md"
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
              className="w-full rounded-lg object-cover shadow-md"
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
          <div className="flex flex-1 flex-col justify-center space-y-6 py-8">
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
                <strong>Minimum time till harvest:</strong>{' '}
                {plant.daysToHarvestMin < 365
                  ? `${plant.daysToHarvestMin} days`
                  : `${plant.daysToHarvestMin / 365} years`}
              </p>
              <p>
                <strong>Maximum time till harvest:</strong>{' '}
                {plant.daysToHarvestMax < 365
                  ? `${plant.daysToHarvestMax} days`
                  : `${plant.daysToHarvestMax / 365} years`}
              </p>
              <p>
                <strong>Yield min:</strong> {plant.yieldPerPlantMin} kg
              </p>
              <p>
                <strong>Yield max:</strong> {plant.yieldPerPlantMax} kg
              </p>
            </section>
            <section className="relative z-10 space-y-2">
              <h2 className="text-2xl font-semibold">
                Calculate the right number of plants for your household.
              </h2>
              <dl className="leading-relaxed">
                <dd className="mb-8">
                  Our tool helps estimate how many plants you should grow to
                  meet your household&apos;s yearly needs for this crop.
                </dd>
              </dl>
              <section>
                <div>
                  <button
                    onClick={() => setIsCalculatorOpen(true)}
                    className="center
      rounded-[40px]
      bg-[#d8d9c5]
      px-6
      py-3
      text-center
      text-[clamp(14px,3vw,20px)]
      font-semibold transition hover:bg-[#B8C2A1]"
                  >
                    Open Plant Calculator
                  </button>
                  {plant && (
                    <PlantCalculatorModal
                      isOpen={isCalculatorOpen}
                      onClose={() => setIsCalculatorOpen(false)}
                      vegetable={{
                        id: plant.id,
                        name: plant.name,
                        yieldPerPlantMin: plant.yieldPerPlantMin,
                        yieldPerPlantMax: plant.yieldPerPlantMax,
                        consumptionAdultKg: plant.consumptionAdultKg,
                        consumptionChildKg: plant.consumptionChildKg,
                      }}
                    />
                  )}
                </div>
              </section>
            </section>
            {/* <section className="space-y-2">
              <h2 className="text-2xl font-semibold">Storage</h2>
              <p>{plant.storage}</p>
            </section> */}
          </div>

          <div className="w-full bg-[#f5f1ed]"></div>

          <div className="flex flex-shrink-0 md:h-auto md:w-full">
            <FadeImg
              src={plant.image3 || plant.image}
              alt="Harvest"
              className="w-full rounded-lg object-cover shadow-md"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 overflow-hidden rounded-lg border-0 bg-[#f5f1ed] shadow-none">
        <CardContent className="grid grid-cols-[1fr_16px_1fr] gap-4 p-0">
          <div className="flex flex-shrink-0 md:h-auto md:w-full">
            <FadeImg
              src={plant.image4 || plant.image}
              alt="Growing Conditions"
              className="w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="w-full bg-[#f5f1ed]"></div>
          <div className="flex flex-1 flex-col justify-center space-y-6 py-8">
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold">Storage</h2>
              <dl className="leading-relaxed">
                <strong>Short term: </strong>
                <dd>{plant.storage}</dd>
                <strong>Long term: </strong>
                <dd>{plant.preservation}</dd>
                <strong>Recipe ideas: </strong>
                <dd>{plant.recipeIdeas}</dd>
              </dl>
            </section>
          </div>
        </CardContent>
      </Card>

      {/* plant Calculator */}

      {/* <div className="mt-8 flex justify-center">
        <div>
          <button
            onClick={() => setIsCalculatorOpen(true)}
            className="rounded-full bg-[#e3ead4] px-8 py-3 text-sm font-semibold text-[#2f2f2f] shadow-md transition hover:bg-[#c8d3b3]"
          >
            Open Plant Calculator
          </button>
          {plant && (
            <PlantCalculatorModal
              isOpen={isCalculatorOpen}
              onClose={() => setIsCalculatorOpen(false)}
              vegetable={{
                id: plant.id,
                name: plant.name,
                yieldPerPlantMin: plant.yieldPerPlantMin,
                yieldPerPlantMax: plant.yieldPerPlantMax,
                consumptionAdultKg: plant.consumptionAdultKg,
                consumptionChildKg: plant.consumptionChildKg,
              }}
            />
          )}
        </div>
      </div> */}
    </main>
  )
}
