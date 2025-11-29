import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useUserProfile, useUpdateUserProfile } from '../hooks/useUserProfile'
import { useAuth0 } from '@auth0/auth0-react'

import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import Spacer from '../components/theme/Spacer'

export default function EditProfilePage() {
  const navigate = useNavigate()
  const { user: authUser } = useAuth0()

  const profileQuery = useUserProfile()
  const updateProfile = useUpdateUserProfile()

  const [regions, setRegions] = useState<{ id: number; name: string }[]>([])
  const [form, setForm] = useState({
    display_name: '',
    region_id: '',
  })

  // Load existing profile values into form
  useEffect(() => {
    if (profileQuery.data) {
      setForm({
        display_name: profileQuery.data.display_name ?? '',
        region_id: profileQuery.data.region_id?.toString() ?? '',
      })
    }
  }, [profileQuery.data])

  // Fetch region list for the dropdown
  useEffect(() => {
    async function loadRegions() {
      const res = await fetch('/api/v1/regions')
      const data = await res.json()
      setRegions(data)
    }
    loadRegions()
  }, [])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
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

  if (profileQuery.isLoading) return <p>Loading...</p>
  if (!profileQuery.data) return <p>Failed to load profile.</p>

  return (
    <main className="mx-auto max-w-xl px-6 py-10">
      <ThemedH1>Edit Profile</ThemedH1>
      <Spacer className="h-6" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Display Name */}
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

        {/* Region Dropdown */}
        <div>
          <ThemedText className="mb-1 text-left">Region</ThemedText>
          <select
            name="region_id"
            value={form.region_id}
            onChange={handleChange}
            className="w-full rounded-xl bg-[#f5f2ed] p-3"
          >
            <option value="">Select region...</option>
            {regions.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="rounded-full bg-[#e3ead4] py-3 font-semibold text-[#2f2f2f] hover:bg-[#b9c3a8]"
        >
          Save Changes
        </button>

        {/* Cancel */}
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
