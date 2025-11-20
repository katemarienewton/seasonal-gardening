import Spacer from './theme/Spacer'
import ThemedH1 from './theme/ThemedHeader'
import ThemedText from './theme/ThemedText'

function MonthRegionForm() {
  return (
    <div className="m-3 flex w-3/4 flex-1 flex-col flex-wrap  p-5">
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
            className="appearance-none rounded-[40px] bg-[#e5e4e3] px-10 py-4 text-center text-[clamp(14px,3vw,20px)] font-medium text-[#2f2f2f] md:px-16 "
            name="region"
            id="region"
          >
            <option value="">Select Region</option>
            <option value="chch"> Christchurch</option>
            <option value="ackl"> Auckland</option>
            <option value="nels"> Nelson</option>
            <option value="dun"> Dunedin</option>
          </select>
        </div>
        <Spacer className="h-10" />
        <div className="flex gap-20 md:gap-32">
          <label htmlFor="month">
            {' '}
            <ThemedH1>Month.</ThemedH1>
          </label>
          <select
            className="appearance-none rounded-[40px] bg-[#e5e4e3] px-10 py-4 text-center text-[clamp(14px,3vw,20px)] font-medium text-[#2f2f2f] md:px-16 "
            name="month"
            id="month"
          >
            <option value="">Select Month</option>
            <option value="jan"> January</option>
            <option value="fed"> February</option>
            <option value="mar"> March</option>
            <option value="apr"> April</option>
          </select>
        </div>
        <Spacer />
        <div className="flex  ">
          <button
            className="w-2/3 rounded-full bg-[#e3ead4] px-12 py-4   "
            type="submit"
          >
            Go!
          </button>
        </div>
      </form>
    </div>
  )
}

export default MonthRegionForm
