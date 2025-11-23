export interface PlantData {
  id: number
  name: string
  scientificName: string
  description: string
  soilId: number
  spacingId: number
  requirementsId: number
  feedingId: number
  stakingId: number
  daysToHarvestMin: number
  daysToHarvestMax: number
  yieldPerPlantMin: number
  yieldPerPlantMax: number
  storage: string
  image: string
  soilType: string
  soilPreparation: string
  spacingRowCm: string
  spacingPlantCm: string
  requirementsSun: string
  requirementsWater: string
  requirementsGermination: string
  feedingSchedule: string
  stakingRequired: boolean
  stakingNotes: string
}
