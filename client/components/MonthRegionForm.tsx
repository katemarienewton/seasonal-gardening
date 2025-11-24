import { useEffect, useState } from 'react'
import { useGetAllRegions } from '../hooks/useRegions'
import { useNavigate } from 'react-router'

const months = [
  { January: 'Jan' },
  { February: 'Feb' },
  { March: 'Mar' },
  { April: 'Apr' },
  { May: 'May' },
  { June: 'Jun' },
  { July: 'Jul' },
  { August: 'Aug' },
  { September: 'Sep' },
  { October: 'Oct' },
  { November: 'Nov' },
  { December: 'Dec' },
]

interface AppContext {
  selRegionId: string
  setSelRegionId: React.Dispatch<React.SetStateAction<string>>
  selMonth: string
  setSelMonth: React.Dispatch<React.SetStateAction<string>>
}

export default function MonthRegionForm({
  selRegionId,
  setSelRegionId,
  selMonth,
  setSelMonth,
}: AppContext) {
  const regionQuery = useGetAllRegions()
  const [btnDisabled, setBtnDisabled] = useState(true)
  const navigate = useNavigate()

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setter(e.target.value)
  }

  useEffect(() => {
    if (selRegionId && selMonth) {
      setBtnDisabled(false)
    }
  }, [selRegionId, selMonth])

  const handleSubmit = () => {
    console.log('submitted')
    navigate('/plants')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* top container */}
      <div className="mb-8">
        <h2 className="mb-4 text-3xl font-semibold">
          Choose your month and region to grow.
        </h2>
        <p className="text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          vestibulum
        </p>
      </div>

      {/* bottom container */}
      <div className="flex max-w-md flex-col gap-6">
        {/* region */}
        <div className="flex w-full items-center justify-between gap-4">
          {/* label */}
          <label
            htmlFor="region"
            className="w-24 text-right text-3xl font-semibold"
          >
            Region.
          </label>
          {/* select */}
          <select
            value={selRegionId}
            onChange={(e) => handleChange(e, setSelRegionId)}
            className="w-60 appearance-none rounded-[40px] bg-[#e5e4e3] px-12 py-4 text-center text-[clamp(14px,3vw,20px)] font-semibold text-[#2f2f2f]"
          >
            <option value="">Select Region</option>
            {regionQuery.data?.map((region) => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </select>
        </div>

        {/* month */}
        <div className="flex w-full items-center justify-between gap-4">
          {/* label */}
          <label
            htmlFor="month"
            className="w-24 text-right text-3xl font-semibold"
          >
            Month.
          </label>
          {/* select */}
          <select
            value={selMonth}
            onChange={(e) => handleChange(e, setSelMonth)}
            className="w-60 appearance-none rounded-[40px] bg-[#e5e4e3] px-12 py-4 text-center text-[clamp(14px,3vw,20px)] font-semibold text-[#2f2f2f]"
          >
            <option value="">Select Month</option>
            {months.map((month) => {
              const [key, value] = Object.entries(month)[0]
              return (
                <option key={value} value={value}>
                  {key}
                </option>
              )
            })}
          </select>
        </div>

        {/* go button */}
        <button
          disabled={!regionQuery.isSuccess || btnDisabled}
          className="w-full appearance-none rounded-[40px] bg-[#B8C2A1] px-12 py-4 text-center text-[clamp(14px,3vw,20px)] font-semibold text-[#2f2f2f]"
          onClick={handleSubmit}
        >
          Go!
        </button>
      </div>
    </div>
  )
}
