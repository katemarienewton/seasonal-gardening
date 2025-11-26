import { useQuery } from '@tanstack/react-query'
import { getPlants } from '../apis/plants'

export function usePlants(regionHardinessZone?: string, month?: string) {
  return useQuery({
    queryKey: ['plants', regionHardinessZone, month],
    queryFn: () => getPlants(regionHardinessZone, month),
  })
}
