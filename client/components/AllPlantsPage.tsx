import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import { usePlants } from '../hooks/usePlants'

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
      <main className="mx-auto max-w-6xl px-4 py-8 md:px-8">
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

              <Link
                to={`/plant/${veg.id}/guide`}
                className="mt-4 self-start text-sm font-semibold text-[#2f2f2f] hover:text-[#B8C2A1]"
              >
                Click to learn more →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
