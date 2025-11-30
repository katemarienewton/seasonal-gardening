import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Header from '../components/Header.tsx'
import { useUserProfile } from '../hooks/useUserProfile'
import { useAuth0 } from '@auth0/auth0-react'

export default function Layout() {
  // Local context state for Home filters

  const { isAuthenticated, isLoading: authLoading } = useAuth0()
  const navigate = useNavigate()

  const [selRegionId, setSelRegionId] = useState<string>('')
  const [selMonth, setSelMonth] = useState<string>('')

  // Fetch backend profile ONLY when logged in
  const profileQuery = useUserProfile({
    enabled: isAuthenticated,
  })

  // Redirect new users once all loading is done
  useEffect(() => {
    if (!authLoading && isAuthenticated && profileQuery.data?.isNew) {
      navigate('/profile', { replace: true })
    }
  }, [authLoading, isAuthenticated, profileQuery.data?.isNew, navigate])

  // Show loading state while Auth0 is initializing to prevent flicker
  if (authLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading authentication beep bop beep…</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f1ed] text-foreground">
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

      <footer></footer>
    </div>
  )
}
