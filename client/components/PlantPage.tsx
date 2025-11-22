import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router'
import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
import { PlantData } from './../../models/plant'

export default function PlantPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [showDetail, setShowDetail] = useState(false)

  const {
    data: vegetable,
    isLoading,
    isError,
  } = useQuery<PlantData>({
    queryKey: ['vegetable', id],
    queryFn: async () => {
      const res = await fetch(`/api/v1/vegetables/${id}`)
      if (!res.ok) throw new Error('Vegetable not found')
      return res.json()
    },
  })

  console.log('Fetched vegetable:', vegetable)
  // const vegetable = vegetableArray?.[0]

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !vegetable) {
    return <p>Cannot find this plant, sorry!</p>
  }

  return (
    <div>
      <img
        src={vegetable.image}
        alt={vegetable.name}
        className="w-50 mb-4 h-40 rounded-lg sm:h-48 md:h-56 lg:h-64"
      />
      <h1 className="mb-2 text-xl font-semibold">{vegetable.name}</h1>
      {showDetail && (
        <div className="mb-2">
          <p>Scientific Name: {vegetable.scientificName}</p>
          <p>{vegetable.description}</p>
          <p>
            Days to harvest: {vegetable.daysToHarvestMin}-
            {vegetable.daysToHarvestMax}
          </p>
        </div>
      )}
      <button onClick={() => setShowDetail(!showDetail)}>
        {showDetail ? 'Hide Details' : 'Show Details'}
      </button>

      <button
        onClick={() => navigate(`/plant/${id}/guide`)}
        className='className="flex flex-wrap items-center gap-2 md:flex-row'
      >
        Show Full Guide
      </button>
    </div>
  )
}
