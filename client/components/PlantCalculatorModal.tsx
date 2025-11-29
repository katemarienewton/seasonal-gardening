import { useState } from 'react'
import { VegetableYield } from '../../models/vegetableYield'
import { calculatePlants } from '../apis/plantCalculator'

interface PlantCalculatorProps {
  isOpen: boolean
  onClose: () => void
  vegetable: VegetableYield
}

export default function PlantCalculatorModal({
  isOpen,
  onClose,
  vegetable,
}: PlantCalculatorProps) {
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [plantsNeeded, setPlantsNeeded] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleCalculate = async () => {
    setLoading(true)
    try {
      const results = await calculatePlants(adults, children)
      const plantResult = results.find((res) => res.id === vegetable.id)
      setPlantsNeeded(plantResult?.plantsNeeded ?? 0)
    } catch (err) {
      console.error(err)
      setPlantsNeeded(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded-2xl bg-white p-6 shadow-lg md:p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          {vegetable.name} Plant Calculator
        </h2>
        <div className="mb-4 flex flex-col gap-4">
          <div>
            <label
              htmlFor="adults"
              className="mb-1 block font-semibold text-gray-700"
            >
              Number of Adults:
            </label>
            <input
              type="number"
              min={0}
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="children"
              className="mb-1 block font-semibold text-gray-700"
            >
              Number of Children
            </label>
            <input
              type="number"
              min={0}
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>
        <div className="mb-1 flex gap-4">
          <button
            onClick={handleCalculate}
            disabled={loading}
            className="flex-1 rounded-full bg-[#e3ead4] px-8 py-3 font-semibold text-[#2f2f2f] transition hover:bg-[#c8d3b3] "
          >
            {loading ? 'Calculating...' : 'Calculate'}
          </button>
          <button
            onClick={onClose}
            className="flex-1 rounded-full bg-[#e3ead4] px-8 py-3 font-semibold text-[#2f2f2f] transition hover:bg-[#c8d3b3]"
          >
            Close
          </button>
        </div>
        {plantsNeeded !== null && (
          <div className="mt-4 rounded-lg border border-[#e3ead4] bg-[#f5f1ed] p-4 text-center">
            <p className="text-gray-800">
              To keep your household stocked with {vegetable.name} for a year,
              you&apos;d need to grow <strong>{plantsNeeded}</strong> plants.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
