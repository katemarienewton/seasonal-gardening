import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import { usePlants } from '../hooks/usePlants'
import FadeImg from './theme/FadeImg'

interface PlantsLocationState {
  regionName?: string
  month?: string
  regionHardinessZone?: string
}

const monthMap: Record<string, string> = {
  Jan: 'January',
  Feb: 'February',
  Mar: 'March',
  Apr: 'April',
  May: 'May',
  Jun: 'June',
  Jul: 'July',
  Aug: 'August',
  Sep: 'September',
  Oct: 'October',
  Nov: 'November',
  Dec: 'December',
}

export default function AllPlantsPage() {
  const location = useLocation()
  const state = (location.state || {}) as PlantsLocationState

  // Fallbacks in case someone hits /plants directly
  const regionName = state.regionName || 'Taranaki'
  const monthAbbrev = state.month || 'Nov' // keep abbreviation for query
  const monthFull = monthMap[monthAbbrev] // full name for display
  const regionHardinessZone = state.regionHardinessZone || '9b'

  const {
    data: plants,
    isLoading,
    isError,
  } = usePlants(regionHardinessZone, monthAbbrev)

  if (isLoading) {
    return (
      <>
        <main className="mx-auto max-w-6xl px-4 py-8 md:px-8">
          <ThemedText>Loading plants…</ThemedText>
        </main>
      </>
    )
  }

  if (isError || !plants || plants.length === 0) {
    return (
      <>
        <main className="mx-auto max-w-6xl px-4 py-8 md:px-8">
          <ThemedText>
            No plants available for {regionName} in {monthFull}.
          </ThemedText>
        </main>
      </>
    )
  }

  return (
    <>
      <main>
        <ThemedH1 className="mb-4 text-left">
          You&apos;ve selected {regionName} in {monthFull}.
        </ThemedH1>

        <ThemedText className="mb-8 text-left">
          This month you can plant:
        </ThemedText>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plants.map((veg) => (
            <article
              key={veg.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-[#f5f2ed] shadow-md"
            >
              <div className="aspect-[3/2] w-full bg-[url(/public/assets/plant.png)] bg-contain bg-center bg-no-repeat">
                <FadeImg
                  src={veg.image}
                  alt={veg.name}
                  className="aspect-[3/2] object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex flex-col gap-2">
                  <ThemedH1 className="text-left text-xl">{veg.name}</ThemedH1>
                  <ThemedText className="text-left text-lg">
                    {veg.description}
                  </ThemedText>
                </div>

                <Link
                  to={`/plant/${veg.id}/guide`}
                  state={{ regionName, month: monthFull }}
                >
                  Click to learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
