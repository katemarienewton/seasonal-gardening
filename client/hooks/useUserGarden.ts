import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuthFetch } from '../components/lib/authFetch'

// Types for plants in the user's garden
export interface GardenPlant {
  id: number
  name: string
  description: string
  image: string
}

//
// GET USER GARDEN
//
export function useUserGarden() {
  const authFetch = useAuthFetch()

  return useQuery<GardenPlant[]>({
    queryKey: ['user-garden'],
    queryFn: async () => {
      const res = await authFetch('/api/v1/garden')
      if (!res.ok) throw new Error('Failed to load garden')
      return res.json()
    },
  })
}

//
// REMOVE FROM GARDEN
//
export function useRemoveFromGarden() {
  const authFetch = useAuthFetch()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (plantId: number) => {
      const res = await authFetch(`/api/v1/garden/${plantId}`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error('Failed to remove plant')
      return true
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-garden'] })
    },
  })
}
