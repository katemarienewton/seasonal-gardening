import { useTestAuth } from '../hooks/useTestAuth'
// import {useAuth0} from .. add when ready and delete above
import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import Spacer from '../components/theme/Spacer'
import { useNavigate } from 'react-router'

export default function MyProfile() {
  const { user, logout } = useTestAuth() // swap usetestauth with useAuth0 when ready
  const navigate = useNavigate()

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      {/* Page Title */}
      <ThemedH1 className="mb-4 text-left">My Account</ThemedH1>
      <ThemedText className="mb-8 text-left">
        Manage your account details below.
      </ThemedText>

      {/* Profile Layout */}
      <section className="rounded-2xl bg-[#f5f2ed] p-8 shadow-md">
        <div className="flex flex-col gap-4">
          <div>
            <ThemedText className="text-sm uppercase text-[#6b6b6b]">
              Name
            </ThemedText>
            <ThemedH1 className="text-xl text-[#2f2f2f]">
              {user?.name ?? 'Unknown User in profile'}
            </ThemedH1>
          </div>

          <div>
            <ThemedText className="text-sm uppercase text-[#6b6b6b]">
              Email
            </ThemedText>
            <ThemedH1 className="text-xl text-[#2f2f2f]">
              {user?.email ?? 'No email available soz'}
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
            Go Back
          </button>

          <button
            className="w-full rounded-full bg-[#e5e4e3] px-6 py-3 font-semibold text-[#2f2f2f] transition hover:bg-[#d3d0ce]"
            onClick={() => logout()}
          >
            Log out
          </button>
        </div>
      </section>
    </main>
  )
}
