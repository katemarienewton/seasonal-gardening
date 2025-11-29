import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuthFetch } from '../components/lib/authFetch'

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
    enabled: options.enabled ?? true, // allow caller to disable if needed
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
