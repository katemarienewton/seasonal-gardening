import { PlantData } from '../../models/plant'
import db from './connection'

export async function getPlantDetail(id: number): Promise<PlantData> {
  const plantDetail = await db('vegetables')
    .join('soil', 'vegetables.soil_id', 'soil.id')
    .join('spacing', 'vegetables.spacing_id', 'spacing.id')
    .join('requirements', 'vegetables.requirements_id', 'requirements.id')
    .join('feeding', 'vegetables.feeding_id', 'feeding.id')
    .join('staking', 'vegetables.staking_id', 'staking.id')
    .where({ 'vegetables.id': id })
    .select(
      'vegetables.id',
      'vegetables.name',
      'vegetables.scientific_name as scientificName',
      'vegetables.description',
      'vegetables.days_to_harvest_min as daysToHarvestMin',
      'vegetables.days_to_harvest_max as daysToHarvestMax',
      'vegetables.yield_per_plant_min as yieldPerPlantMin',
      'vegetables.yield_per_plant_max as yieldPerPlantMax',
      'vegetables.storage',
      'vegetables.image',
      'vegetables.image2',
      'vegetables.image3',
      'soil.id as soilId',
      'soil.type as soilType',
      'soil.preparation as soilPreparation',
      'spacing.id as spacingId',
      'spacing.row_cm as spacingRowCm',
      'spacing.plant_cm as spacingPlantCm',
      'requirements.germination as requirementsGermination',
      'requirements.sun as requirementsSun',
      'requirements.water as requirementsWater',
      'feeding.schedule as feedingSchedule',
      'staking.required as stakingRequired',
      'staking.notes as stakingNotes',

      // 'vegetable.spacing_id as spacingId',
      // 'vegetable.requirements_id as requirementsId',
      // 'vegetable.feeding_id as feedingId',
      // 'vegetable.staking_id as stakingId',
    )
    .first()
  return plantDetail as PlantData
}
