import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

interface Plant {
  id: number
  name: string
  image: string
}

export default function MyGarden() {
  const navigate = useNavigate()
  const [plants, setPlants] = useState<Plant[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('myGarden') || '[]')
    setPlants(saved)
  }, [])

  return (
    <div className="mx-auto mt-24 max-w-6xl px-4 md:px-8">
      <div className="mb-10 flex justify-between">
        <button

          className="w-full rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-foreground transition hover:bg-muted"
          onClick={() => navigate('/manage-my-garden')}

//           onClick={() => navigate(-2)}
//           className="rounded-full bg-[#e3ead4] px-8 py-3 text-sm font-semibold text-[#2f2f2f] shadow-md transition hover:bg-[#c8d3b3]"
// >>>>>>> development
        >
          ← Back to list
        </button>

        <button
          onClick={() => navigate('/profile')}
          className="rounded-full bg-[#e3ead4] px-8 py-3 text-sm font-semibold text-[#2f2f2f] shadow-md transition hover:bg-[#c8d3b3]"
        >
          My Account
        </button>
      </div>

      <h1 className="mb-6 text-3xl font-bold text-[#2f2f2f]">My Garden</h1>

      {plants.length === 0 ? (
        <p className="mb-10 text-lg text-gray-700">
          You haven’t added any plants yet! Explore the{' '}
          <button
            onClick={() => navigate('/plants')}
            className="underline hover:text-[#6c7b5e]"
          >
            planting guide
          </button>{' '}
          to start your garden.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="flex flex-col rounded-2xl bg-[#f5f2ed] p-5 shadow-md"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="mb-4 h-64 w-full rounded-xl object-cover"
              />
              <h2 className="mb-2 text-xl font-semibold text-[#2f2f2f]">
                {plant.name}
              </h2>
              <button
                onClick={() => {
                  const updated = plants.filter((p) => p.id !== plant.id)
                  setPlants(updated)
                  localStorage.setItem('myGarden', JSON.stringify(updated))
                }}
                className="mt-auto rounded-full bg-[#e3ead4] px-5 py-2 text-sm font-semibold text-[#2f2f2f] shadow-md transition hover:bg-[#c8d3b3]"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
