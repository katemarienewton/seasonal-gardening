import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { PlantData } from './../../models/plant'

export default function PlantGuide() {
  const { id } = useParams()

  const {
    data: plant,
    isLoading,
    isError,
  } = useQuery<PlantData>({
    queryKey: ['plantGuide', id],
    queryFn: async () => {
      const res = await fetch(`/api/v1/vegetables/${id}`)
      if (!res.ok) throw new Error('Plant guide not found')
      return res.json()
    },
  })
  // const plant = plantArray?.[0]
  if (isLoading) {
    return <p>Loading planting guide...</p>
  }
  if (isError || !plant) {
    return <p>Guide not found.</p>
  }
  return (
    <div>
      <h1>{plant.name} Growing Guide</h1>
      <div>
        <em>{plant.scientificName}</em>
        <p>{plant.description}</p>
        <img src={plant.image} alt={plant.name} />
      </div>
      <div>
        <h2>Soil</h2>
        <p>Type: {plant.soilType}</p>
        <p>Preparation: {plant.soilPreparation}</p>
      </div>
      <div>
        <h2>Spacing</h2>
        <p>Row: {plant.spacingRowCm}cm</p>
        <p>Plant size: {plant.spacingPlantCm}cm</p>
      </div>
      <div>
        <h2>Requirements</h2>
        <p>Sun: {plant.requirementsSun}</p>
        <p>Water: {plant.requirementsWater}</p>
        <p>Germination: {plant.requirementsGermination}</p>
      </div>
      <div>
        <h2>Feeding</h2>
        <p>{plant.feedingSchedule}</p>
      </div>
      <div>
        <h2>Staking</h2>
        <p>Required? {plant.stakingRequired}</p>
        <p>{plant.stakingNotes}</p>
      </div>
      <div>
        <h2>Harvest Information</h2>
        <p>Minimum days to harvest: {plant.daysToHarvestMin}</p>
        <p>Maximum days to harvest: {plant.daysToHarvestMax}</p>
        <p>Minimum yield per plant: {plant.yieldPerPlantMin}</p>
        <p>Maximum yield per plant: {plant.yieldPerPlantMax}</p>
      </div>
    </div>
  )
}
