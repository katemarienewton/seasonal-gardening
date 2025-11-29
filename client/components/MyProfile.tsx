import { useNavigate } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'
import { useUserProfile } from '../hooks/useUserProfile'

import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import Spacer from '../components/theme/Spacer'

export default function MyProfile() {
  const navigate = useNavigate()
  const { user: authUser, logout } = useAuth0()

  // Backend profile (display_name, region_id, isNew flag)
  const profileQuery = useUserProfile()

  if (profileQuery.isLoading) {
    return (
      <main className="flex h-screen items-center justify-center">
        <p>Loading your profile beep bop…</p>
      </main>
    )
  }

  if (profileQuery.isError || !profileQuery.data) {
    return (
      <main className="flex h-screen items-center justify-center">
        <p>Failed to load profile sorry.</p>
      </main>
    )
  }

  const profile = profileQuery.data

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      {/* PAGE TITLE */}
      <ThemedH1 className="mb-4 text-left">My Account</ThemedH1>
      <ThemedText className="mb-8 text-left">
        Manage your account details below.
      </ThemedText>

      {/* PROFILE CARD */}
      <section className="rounded-2xl bg-[#f5f2ed] p-8 shadow-md">
        {/* TOP SECTION (Auth0 avatar + name) */}
        <div className="mb-8 flex items-center gap-6">
          <img
            src={authUser?.picture}
            alt="User avatar"
            className="h-20 w-20 rounded-full shadow"
          />

          <div className="flex flex-col">
            <ThemedText className="text-sm uppercase text-[#6b6b6b]">
              Logged in as:
            </ThemedText>
            <ThemedH1 className="text-xl text-[#2f2f2f]">
              {authUser?.email ?? 'Unknown Email'}
            </ThemedH1>
          </div>
        </div>

        {/* BACKEND PROFILE INFO */}
        <div className="flex flex-col gap-6">
          <div>
            <ThemedText className="text-sm uppercase text-[#6b6b6b]">
              Display Name
            </ThemedText>
            <ThemedH1 className="text-xl text-[#2f2f2f]">
              {profile.display_name || 'Not set'}
            </ThemedH1>
          </div>

          <div>
            <ThemedText className="text-sm uppercase text-[#6b6b6b]">
              Region
            </ThemedText>
            <ThemedH1 className="text-xl text-[#2f2f2f]">
              {profile.region_id ?? 'Not selected'}
            </ThemedH1>
          </div>
        </div>

        <Spacer className="h-8" />

        {/* ACTION BUTTONS */}
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
            My Garden
          </button>

          <button
            className="w-full rounded-full bg-[#e5e4e3] px-6 py-3 font-semibold text-[#2f2f2f] transition hover:bg-[#d3d0ce]"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      </section>
    </main>
  )
}
