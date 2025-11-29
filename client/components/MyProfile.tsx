import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'
import { useUserProfile } from '../hooks/useUserProfile'

import ThemedH1 from './theme/ThemedHeader'
import ThemedText from './theme/ThemedText'
import Spacer from './theme/Spacer'

export default function MyProfile() {
  const navigate = useNavigate()
  const { user, logout } = useAuth0()

  const profileQuery = useUserProfile()

  if (profileQuery.isLoading) return <p>Loading your profile...</p>
  if (profileQuery.isError) return <p>Error loading your profile.</p>

  const profile = profileQuery.data

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      {/* Page Title */}
      <ThemedH1 className="mb-4 text-left">My Account</ThemedH1>
      <ThemedText className="mb-8 text-left">
        Manage your account details below.
      </ThemedText>

      {/* Profile Card */}
      <section className="rounded-2xl bg-[#f5f2ed] p-8 shadow-md">
        <div className="flex flex-col gap-6">
          {/* Display Name (from backend) */}
          <div>
            <ThemedText className="text-sm uppercase text-[#6b6b6b]">
              Display Name
            </ThemedText>
            <ThemedH1 className="text-xl text-[#2f2f2f]">
              {profile?.display_name || 'Not set'}
            </ThemedH1>
          </div>

          {/* Region (from backend) */}
          <div>
            <ThemedText className="text-sm uppercase text-[#6b6b6b]">
              Region
            </ThemedText>
            <ThemedH1 className="text-xl text-[#2f2f2f]">
              {profile?.region_id ?? 'Not selected'}
            </ThemedH1>
          </div>

          {/* Email (from Auth0) */}
          <div>
            <ThemedText className="text-sm uppercase text-[#6b6b6b]">
              Email
            </ThemedText>
            <ThemedH1 className="text-xl text-[#2f2f2f]">
              {user?.email || 'Email unavailable'}
            </ThemedH1>
          </div>
        </div>

        <Spacer className="h-8" />

        {/* Actions */}
        <div className="flex flex-col gap-4">
          <button
            className="w-full rounded-full bg-[#e3ead4] px-6 py-3 font-semibold text-[#2f2f2f] transition hover:bg-[#b9c3a8]"
            onClick={() => navigate('/profile/edit')}
          >
            Edit Profile
          </button>

          <button
            className="w-full rounded-full bg-[#e3ead4] px-6 py-3 font-semibold text-[#2f2f2f] transition hover:bg-[#b9c3a8]"
            onClick={() => navigate('/my-garden')}
          >
            Go to My Garden
          </button>

          <button
            className="w-full rounded-full bg-[#e5e4e3] px-6 py-3 font-semibold text-[#2f2f2f] transition hover:bg-[#d3d0ce]"
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
