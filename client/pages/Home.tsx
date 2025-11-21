import { useOutletContext } from 'react-router'
import MonthRegionForm from '../components/MonthRegionForm'

interface AppContext {
  selRegionId: string
  setSelRegionId: React.Dispatch<React.SetStateAction<string>>
  selMonth: string
  setSelMonth: React.Dispatch<React.SetStateAction<string>>
}

function Home() {
  const { selRegionId, setSelRegionId, selMonth, setSelMonth } =
    useOutletContext<AppContext>()
  return (
    <div className="mx-auto flex w-4/5 flex-1">
      <MonthRegionForm
        selMonth={selMonth}
        selRegionId={selRegionId}
        setSelMonth={setSelMonth}
        setSelRegionId={setSelRegionId}
      />
      <div className="-ml-64 mt-16 flex-1">
        <img src="../../public/assets/nz-02.png" alt="map of nz" />
      </div>
    </div>
  )
}

export default Home
