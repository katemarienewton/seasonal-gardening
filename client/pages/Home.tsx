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
    <div className="relative flex w-full flex-col lg:flex-row">
      <div className="z-10">
        <MonthRegionForm
          selMonth={selMonth}
          selRegionId={selRegionId}
          setSelMonth={setSelMonth}
          setSelRegionId={setSelRegionId}
        />
      </div>
      {/* png */}
      <div className="nz-02.png pointer-events-none fixed bottom-0 right-4 z-0">
        <img
          src="/assets/nz-02.png"
          alt="NZ Map"
          className="h-auto max-h-[80vh] w-auto object-contain opacity-100 lg:max-h-[90vh]"
        />
      </div>
    </div>
  )
}
