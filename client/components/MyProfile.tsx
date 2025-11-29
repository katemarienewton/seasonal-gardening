import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'
import { useUserProfile } from '../hooks/useUserProfile'

import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import Spacer from '../components/theme/Spacer'

export default function MyProfile() {
  const navigate = useNavigate()
  const { user, logout } = useAuth0()
  const profileQuery = useUserProfile()

  if (profileQuery.isLoading) return <p>Loading...</p>
  if (profileQuery.isError) return <p>Failed to load profile.</p>

  const profile = profileQuery.data

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <ThemedH1 className="mb-4 text-left">My Account</ThemedH1>

      <section className="rounded-2xl bg-[#f5f2ed] p-8 shadow-md">
        <div className="flex flex-col gap-6">
          <div>
            <ThemedText className="text-sm uppercase text-[#6b6b6b]">
              Display Name
            </ThemedText>
            <ThemedH1 className="text-xl">
              {profile.display_name || 'Not set'}
            </ThemedH1>
          </div>

          <div>
            <ThemedText className="text-sm uppercase text-[#6b6b6b]">
              Region
            </ThemedText>
            <ThemedH1 className="text-xl">
              {profile.region_id ?? 'Not set'}
            </ThemedH1>
          </div>

          <div>
            <ThemedText className="text-sm uppercase text-[#6b6b6b]">
              Email
            </ThemedText>
            <ThemedH1 className="text-xl">{user?.email}</ThemedH1>
          </div>
        </div>

        <Spacer className="h-8" />

        <div className="flex flex-col gap-4">
          <button
            className="rounded-full bg-[#e3ead4] py-3 font-semibold"
            onClick={() => navigate('/profile/edit')}
          >
            Edit Profile
          </button>

          <button
            className="rounded-full bg-[#e5e4e3] py-3 font-semibold"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log out
          </button>
        </div>
      </section>
    </main>
  )
}
