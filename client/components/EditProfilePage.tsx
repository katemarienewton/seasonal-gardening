import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useTestAuth } from '../hooks/useTestAuth'
import { useUserProfile, useUpdateUserProfile } from '../hooks/useUserProfile'

import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import Spacer from '../components/theme/Spacer'

export default function EditProfile() {
  const navigate = useNavigate()
  const { user } = useTestAuth() // later: useAuth0()

  const userId = 1 // placeholder: replace with user.id linked to DB later once the auth0 is set up

  const profileQuery = useUserProfile(userId)
  const updateProfile = useUpdateUserProfile(userId)

  const [form, setForm] = useState({
    email: user?.email ?? '',
    region_id: '',
  })

  if (profileQuery.isLoading) return <p>Loading profile...</p>

  const saved = profileQuery.data

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await updateProfile.mutateAsync(form)
    navigate('/profile')
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-10">
      <ThemedH1>Edit Profile</ThemedH1>
      <Spacer className="h-6" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* EMAIL */}
        <div>
          <ThemedText className="mb-1 text-left">Email</ThemedText>
          <input
            type="email"
            name="email"
            value={form.email}
            className="w-full rounded-xl bg-[#f5f2ed] p-3"
            onChange={handleChange}
          />
        </div>

        {/* REGION */}
        <div>
          <ThemedText className="mb-1 text-left">Region ID</ThemedText>
          <input
            type="number"
            name="region_id"
            value={form.region_id}
            className="w-full rounded-xl bg-[#f5f2ed] p-3"
            onChange={handleChange}
          />
        </div>

        {/* ACTION BUTTONS */}
        <button
          type="submit"
          className="rounded-full bg-[#e3ead4] py-3 font-semibold text-[#2f2f2f] hover:bg-[#b9c3a8]"
        >
          Save Changes
        </button>

        <button
          type="button"
          className="rounded-full bg-[#e5e4e3] py-3 font-semibold text-[#2f2f2f] hover:bg-[#dcdcdc]"
          onClick={() => navigate('/profile')}
        >
          Cancel
        </button>
      </form>
    </main>
  )
}
