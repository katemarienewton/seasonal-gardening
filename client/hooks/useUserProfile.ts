import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuthFetch } from '../components/lib/authFetch'
import { useAuth0 } from '@auth0/auth0-react'
import { UserProfile, UserProfileUpdate } from '../../models/user'

interface UseUserProfileOptions {
  enabled?: boolean
}

export function useUserProfile(options: UseUserProfileOptions = {}) {
  const authFetch = useAuthFetch()
  const { isAuthenticated, isLoading: authLoading } = useAuth0()

  return useQuery<UserProfile>({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const res = await authFetch('/api/v1/users/me')
      if (!res.ok) throw new Error('Failed to load user')
      return res.json() as Promise<UserProfile>
    },
    enabled:
      !authLoading && // Auth0 must be ready
      isAuthenticated && // User must be logged in
      (options.enabled ?? true), // Extra control from caller
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
