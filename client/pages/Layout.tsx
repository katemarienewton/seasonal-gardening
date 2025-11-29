import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Header from '../components/Header.tsx'
import { useUserProfile } from '../hooks/useUserProfile'
import { useAuth0 } from '@auth0/auth0-react'

export default function Layout() {
  // Local context state for Home filters
  const [selRegionId, setSelRegionId] = useState<string>('')
  const [selMonth, setSelMonth] = useState<string>('')

  const navigate = useNavigate()
  const { isAuthenticated, isLoading: authLoading } = useAuth0()

  // Fetch backend profile ONLY when logged in
  const profileQuery = useUserProfile({
    enabled: isAuthenticated,
  })

  // Redirect new users once all loading is done
  useEffect(() => {
    if (authLoading) return // wait for Auth0
    if (!isAuthenticated) return // not logged in
    if (profileQuery.isLoading) return // still loading backend profile

    if (profileQuery.data?.isNew === true) {
      navigate('/profile', { replace: true })
    }
  }, [
    authLoading,
    isAuthenticated,
    profileQuery.isLoading,
    profileQuery.data,
    navigate,
  ])

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
