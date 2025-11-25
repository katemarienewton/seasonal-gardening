import {useNavigate} from 'react-router'

export default function MyGarden() {
  
  const navigate = useNavigate()
  
  return (
    <div className="p-10">
      <h1 className="mb-6 text-3xl font-bold">My Garden</h1>

      <p className="mb-10 text-lg text-muted-foreground">
        Welcome to your garden - this is a placeholder at the mo.
      </p>

      <div className="flex max-w-sm flex-col gap-6">
        <button
          className="w-full rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-foreground transition hover:bg-muted"
          onClick={() => navigate('/manage-my-garden')}
        >
          Manage My Garden
        </button>

        <button
          className="w-full rounded-full bg-[#e5e4e3] px-8 py-4 text-lg font-semibold text-[#2f2f2f] hover:bg-[#cfcfcf] transition"
          onClick={() => navigate('/profile')}
        >
          My Account
        </button>
      </div>
    </div>
  )
}
