import { useQuery } from '@tanstack/react-query'
import { getAllRegions } from '../apis/region'

export function useGetAllRegions() {
  const query = useQuery({ queryKey: ['regionList'], queryFn: getAllRegions })
  return {
    ...query,
  }
}
