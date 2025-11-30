import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'

import ThemedH1 from '../components/theme/ThemedHeader'
import ThemedText from '../components/theme/ThemedText'
import FadeImg from '../components/theme/FadeImg'

interface Plant {
  id: number
  name: string
  image: string
  description?: string
}

export default function MyGarden() {
  const navigate = useNavigate()
  const [plants, setPlants] = useState<Plant[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('myGarden') || '[]')
    setPlants(saved)
  }, [])

  return (
    <main>
      <ThemedH1 className="mb-4 text-left">My Garden.</ThemedH1>
      <ThemedText className="mb-8 text-left">
        You are currently growing:
      </ThemedText>

      <div className="mb-8 flex gap-4">
        <button
          className="rounded-[40px]
      bg-[#e8e6e1]
      px-6
      py-3
      text-center
      text-[clamp(14px,3vw,20px)]
      font-semibold
      text-[#2f2f2f]
      transition
      hover:bg-[#dcd8ce]"
          onClick={() => navigate(-2)}

          //           onClick={() => navigate(-2)}
          //           className="rounded-full bg-[#e3ead4] px-8 py-3 text-sm font-semibold text-[#2f2f2f] shadow-md transition hover:bg-[#c8d3b3]"
          // >>>>>>> development
        >
          ← Back to List
        </button>

        <button
          onClick={() => navigate('/profile')}
          className="rounded-[40px]
      bg-[#e8e6e1]
      px-6
      py-3
      text-center
      text-[clamp(14px,3vw,20px)]
      font-semibold
      text-[#2f2f2f]
      transition
      hover:bg-[#dcd8ce]"
        >
          My Account
        </button>
      </div>

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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plants.map((plant) => (
            <article
              key={plant.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <div className="aspect-[3/2] w-full bg-[url(/public/assets/plant.png)] bg-contain bg-center bg-no-repeat">
                <FadeImg
                  src={plant.image}
                  alt={plant.name}
                  className="aspect-[3/2] object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5 pb-0">
                <div className="flex flex-col gap-2">
                  <ThemedH1 className="text-x text-left">{plant.name}</ThemedH1>
                </div>

                <Link to={`/plant/${plant.id}/guide`} className="">
                  Click to learn more →
                </Link>
              </div>

              <button
                onClick={() => {
                  const updated = plants.filter((p) => p.id !== plant.id)
                  setPlants(updated)
                  localStorage.setItem('myGarden', JSON.stringify(updated))
                }}
                className="m-6 rounded-[40px] bg-[#e3ead4] px-6 py-1.5 text-[clamp(14px,3vw,16px)] font-semibold text-[#2f2f2f] transition hover:bg-[#c8d3b3]"
              >
                Remove
              </button>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
