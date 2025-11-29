import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Header from './Header'
import { useUserProfile } from '../hooks/useUserProfile'
import { useAuth0 } from '@auth0/auth0-react'

export default function Layout() {
  const [selRegionId, setSelRegionId] = useState<string>('')
  const [selMonth, setSelMonth] = useState<string>('')

  const { isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()

  // Only call useUserProfile *after Auth0 finished loading*
  const shouldLoadProfile = isAuthenticated && !isLoading

  const profileQuery = useUserProfile({
    enabled: shouldLoadProfile, // prevents unauthorized calls
  })

  // Redirect new users AFTER profile loads
  useEffect(() => {
    if (shouldLoadProfile && profileQuery.data?.isNew) {
      navigate('/profile', { replace: true })
    }
  }, [shouldLoadProfile, profileQuery.data, navigate])

  // added this in here in case we wanted to link a loading image as sprint exercise
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading authentication...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f1ed]">
      <Header />

      <main className="flex-1 px-8 py-8">
        <Outlet
          context={{
            selRegionId,
            setSelRegionId,
            selMonth,
            setSelMonth,
          }}
        />
      </main>
    </div>
  )
}
