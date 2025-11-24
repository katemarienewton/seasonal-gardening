import { useQuery, useMutation } from '@tanstack/react-query'

export function useUserProfile(userId: string) {
  return useQuery({
    queryKey: ['profile', userId],
    queryFn: () => fetch(`/api/v1/profile/${userId}`).then(res => res.json())
  })
}

export function useUpdateProfile(userId: string) {
  return useMutation({
    mutationFn: (updates) =>
      fetch(`/api/v1/profile/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      }),
  })
}
