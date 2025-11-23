import { useQuery } from '@tanstack/react-query'
import { getPlants } from '../apis/plants'

export function usePlants() {
  return useQuery({
    queryKey: ['plants'],
    queryFn: getPlants,
  })
}
