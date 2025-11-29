import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuthFetch } from '../components/lib/authFetch.ts'
import { UserProfile, UserProfileUpdate } from '../../models/user'

interface UseUserProfileOptions {
  enabled?: boolean
}

export function useUserProfile(options: UseUserProfileOptions = {}) {
  const authFetch = useAuthFetch()

  return useQuery<UserProfile>({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const res = await authFetch('/api/v1/users/me')
      if (!res.ok) throw new Error('Failed to load user')
      return res.json() as Promise<UserProfile>
    },
    enabled: options.enabled ?? true,
  })
}

export function useUpdateUserProfile() {
  const authFetch = useAuthFetch()
  const queryClient = useQueryClient()

  return useMutation<UserProfile, Error, UserProfileUpdate>({
    mutationFn: async (updates) => {
      const res = await authFetch('/api/v1/users/me', {
        method: 'PATCH',
        body: JSON.stringify(updates),
      })

      if (!res.ok) throw new Error('Failed to update user')
      return res.json() as Promise<UserProfile>
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] })
    },
  })
}

export function useRemoveFromGarden() {
  const authFetch = useAuthFetch()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (plantId: number) => {
      const res = await authFetch(`/api/v1/garden/${plantId}`, {
        method: 'DELETE',
      })
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-garden'] })
    },
  })
}
