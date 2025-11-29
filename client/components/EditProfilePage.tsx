import { useNavigate } from 'react-router'
import { useUserProfile, useUpdateUserProfile } from '../hooks/useUserProfile'

import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import Spacer from '../components/theme/Spacer'
import { useState, useEffect } from 'react'

export default function EditProfilePage() {
  const navigate = useNavigate()

  // Load existing profile
  const profileQuery = useUserProfile()
  const updateProfile = useUpdateUserProfile()

  const [form, setForm] = useState({
    display_name: '',
    region_id: '',
  })

  // Populate form once data loads
  useEffect(() => {
    if (profileQuery.data) {
      setForm({
        display_name: profileQuery.data.display_name ?? '',
        region_id: profileQuery.data.region_id?.toString() ?? '',
      })
    }
  }, [profileQuery.data])

  if (profileQuery.isLoading) return <p>Loading profile...</p>
  if (profileQuery.isError) return <p>Error loading profile.</p>

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await updateProfile.mutateAsync({
      display_name: form.display_name,
      region_id: Number(form.region_id),
    })

    navigate('/profile')
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-10">
      <ThemedH1>Edit Profile</ThemedH1>
      <Spacer className="h-6" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* DISPLAY NAME */}
        <div>
          <ThemedText className="mb-1 text-left">Display Name</ThemedText>
          <input
            type="text"
            name="display_name"
            value={form.display_name}
            className="w-full rounded-xl bg-[#f5f2ed] p-3"
            onChange={handleChange}
          />
        </div>

        {/* REGION ID */}
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

        {/* BUTTONS */}
        <button
          type="submit"
          className="rounded-full bg-[#e3ead4] py-3 font-semibold text-[#2f2f2f] hover:bg-[#b9c3a8]"
        >
          Save Changes
        </button>

        <button
          type="button"
          onClick={() => navigate('/profile')}
          className="rounded-full bg-[#e5e4e3] py-3 font-semibold text-[#2f2f2f] hover:bg-[#d3d0ce]"
        >
          Cancel
        </button>
      </form>
    </main>
  )
}
