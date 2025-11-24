import { useOutletContext } from 'react-router'
import MonthRegionForm from '../components/MonthRegionForm'

interface AppContext {
  selRegionId: string
  setSelRegionId: React.Dispatch<React.SetStateAction<string>>
  selMonth: string
  setSelMonth: React.Dispatch<React.SetStateAction<string>>
}

export default function Home() {
  const { selRegionId, setSelRegionId, selMonth, setSelMonth } =
    useOutletContext<AppContext>()

  return (
    <div className="flex flex-col items-start gap-8 lg:flex-row">
      <MonthRegionForm
        selMonth={selMonth}
        selRegionId={selRegionId}
        setSelMonth={setSelMonth}
        setSelRegionId={setSelRegionId}
      />

      <div className="flex flex-1 justify-center lg:justify-end">
        <img
          src="/assets/nz-02.png"
          alt="map of nz"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  )
}
