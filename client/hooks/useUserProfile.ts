import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export function useUserProfile(id: number | string) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: async () => {
      const res = await fetch(`/api/v1/users/${id}`)
      if (!res.ok) throw new Error('Failed to load user')
      return res.json()
    },
  })
}

export function useUpdateUserProfile(id: number | string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (updates: any) => {
      const res = await fetch(`/api/v1/users/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      })
      if (!res.ok) throw new Error('Failed to update user')
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', id] })
    },
  })
}
