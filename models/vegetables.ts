export interface Vegetables {
  id: number
  name: string
  scientific_name: string
  description: string

  soil_id: number
  spacing_id: number
  requirements_id: number
  feeding_id: number
  staking_id: number

  days_to_harvest_min: number
  days_to_harvest_max: number

  yield_per_plant_min: number
  yield_per_plant_max: number

  storage: string
  image: string
}
