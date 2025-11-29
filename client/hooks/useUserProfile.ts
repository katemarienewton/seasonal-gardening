import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export function useUserProfile(options?: { enabled?: boolean }) {
  const authFetch = useAuthFetch()

  return useQuery<UserProfile>({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const res = await authFetch('/api/v1/users/me')
      if (!res.ok) throw new Error('Failed to load user')
      return res.json() as Promise<UserProfile>
    },
    enabled: options?.enabled ?? true,
  })
}

export function useUserProfile(options?: { enabled?: boolean }) {
  const authFetch = useAuthFetch()

  return useQuery<UserProfile>({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const res = await authFetch('/api/v1/users/me')
      if (!res.ok) throw new Error('Failed to load user')
      return res.json() as Promise<UserProfile>
    },
    enabled: options?.enabled ?? true,
  })
}
