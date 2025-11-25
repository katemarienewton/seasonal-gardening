import { useQuery } from '@tanstack/react-query'

export function useUserGarden(userId: number) {
  return useQuery({
    queryKey: ['garden', userId],
    queryFn: async () => {
      const res = await fetch(`/api/v1/garden/${userId}`)
      if (!res.ok) throw new Error('Could not load garden')
      return res.json()
    },
  })
}
