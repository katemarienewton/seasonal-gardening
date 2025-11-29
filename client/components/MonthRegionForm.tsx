import { useEffect, useState } from 'react'
import { useGetAllRegions } from '../hooks/useRegions'
import { useNavigate } from 'react-router'
import FormRow from './theme/FormRow'
import InputSelect from './theme/InputSelect'
import Button from './theme/Button'

import ThemedH1 from './theme/ThemedHeader'
import ThemedText from './theme/ThemedText'

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

interface MonthRegionFormProps {
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
}: MonthRegionFormProps) {
  const regionQuery = useGetAllRegions()
  const [btnDisabled, setBtnDisabled] = useState(true)
  const navigate = useNavigate()

  useEffect(
    () => setBtnDisabled(!(selRegionId && selMonth)),
    [selRegionId, selMonth],
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => setter(e.target.value)

  const handleSubmit = () => {
    const selectedRegion = regionQuery.data?.find(
      (region) => region.id.toString() === selRegionId,
    )

    if (!selectedRegion) return

    navigate('/plants', {
      state: {
        regionName: selectedRegion.name,
        regionHardinessZone: selectedRegion.hardiness_zone,
        month: selMonth,
      },
    })
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="w-full max-w-2xl">
        <ThemedH1 className="mb-4 text-left">
          Choose your month and region to grow.
        </ThemedH1>
        <ThemedText className="mb-8 text-left">
          A guide to seasonal gardening in New Zealand.
        </ThemedText>
      </div>

      <div className="flex w-full max-w-lg flex-col gap-6">
        <FormRow label="Region.">
          <InputSelect
            value={selRegionId}
            onChange={(e) => handleChange(e, setSelRegionId)}
          >
            <option value="">Select Region</option>
            {regionQuery.data?.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </InputSelect>
        </FormRow>

        <FormRow label="Month.">
          <InputSelect
            value={selMonth}
            onChange={(e) => handleChange(e, setSelMonth)}
          >
            <option value="">Select Month</option>
            {months.map((m) => {
              const [key, value] = Object.entries(m)[0]
              return (
                <option key={value} value={value}>
                  {key}
                </option>
              )
            })}
          </InputSelect>
        </FormRow>

        <Button
          disabled={!regionQuery.isSuccess || btnDisabled}
          onClick={handleSubmit}
        >
          Go!
        </Button>
      </div>
    </div>
  )
}
