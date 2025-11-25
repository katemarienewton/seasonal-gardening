import { useOutletContext } from 'react-router'
import MonthRegionForm from '../components/MonthRegionForm'

export default function Home() {
  const { selRegionId, setSelRegionId, selMonth, setSelMonth } =
    useOutletContext<{
      selRegionId: string
      setSelRegionId: React.Dispatch<React.SetStateAction<string>>
      selMonth: string
      setSelMonth: React.Dispatch<React.SetStateAction<string>>
    }>()

  return (
    <div className="flex flex-col items-start gap-8 lg:flex-row">
      <MonthRegionForm
        selMonth={selMonth}
        selRegionId={selRegionId}
        setSelMonth={setSelMonth}
        setSelRegionId={setSelRegionId}
      />
    </div>
  )
}
