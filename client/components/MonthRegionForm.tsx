import { useGetAllRegions } from '../hooks/useRegions'
import Spacer from './theme/Spacer'
import ThemedH1 from './theme/ThemedHeader'
import ThemedText from './theme/ThemedText'
import { useOutletContext } from 'react-router'

const months = [
  { January: 'Jan' },
  { February: 'Feb' },
  { March: 'Mar' },
  { April: 'April' },
  { May: 'May' },
  { June: 'Jun' },
  { July: 'Jul' },
  { August: 'Aug' },
  { September: 'Sept' },
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

function MonthRegionForm({
  selRegionId,
  setSelRegionId,
  selMonth,
  setSelMonth,
}: AppContext) {
  const regionQuery = useGetAllRegions()

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setter(e.target.value)
    // console.log(selMonth)
  }
  return (
    <div className="flex-2 m-3 flex flex-col flex-wrap  p-5">
      <div>
        <ThemedH1>Choose your month and region to grow.</ThemedH1>
        <ThemedText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          vestibulum
        </ThemedText>
      </div>
      <Spacer />
      <form>
        <div className="flex  gap-20 md:gap-32">
          <label htmlFor="region">
            <ThemedH1>Region.</ThemedH1>
          </label>
          <select
            value={selRegionId}
            onChange={(e) => {
              handleChange(e, setSelRegionId)
            }}
            className="appearance-none rounded-[40px] bg-[#e5e4e3] px-10 py-4 text-center text-[clamp(14px,3vw,20px)] font-medium text-[#2f2f2f] md:px-16 "
            name="region"
            id="region"
          >
            <option value="">Select Region</option>
            {regionQuery.data?.map((region) => {
              return (
                <option value={region.id} key={region.id}>
                  {region.name}
                </option>
              )
            })}
          </select>
        </div>
        <Spacer className="h-10" />
        <div className="flex gap-20 md:gap-32">
          <label htmlFor="month">
            <ThemedH1>Month.</ThemedH1>
          </label>
          <select
            value={selMonth}
            onChange={(e) => {
              handleChange(e, setSelMonth)
            }}
            className="appearance-none rounded-[40px] bg-[#e5e4e3] px-10 py-4 text-center text-[clamp(14px,3vw,20px)] font-medium text-[#2f2f2f] md:px-16 "
            name="month"
            id="month"
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
        <Spacer />
        <div className="flex justify-center md:justify-start ">
          <button
            disabled={!regionQuery.isSuccess}
            className="w-1/2 cursor-pointer rounded-full bg-[#e3ead4] px-12 py-4 font-semibold text-[#2f2f2f] hover:bg-[#aaaf9f]   "
            type="submit"
          >
            Go!
          </button>
        </div>
      </form>
      {regionQuery.isError ? (
        <p> an error occurred when loading regions. Please refresh</p>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default MonthRegionForm
