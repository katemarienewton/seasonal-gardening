import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router'
import { useState } from 'react'
import { Button } from './button'
import { Card, CardContent } from './card'
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
    <div className="mt-24 px-4 md:px-8">
      <Card className="mx-auto max-w-5xl p-8 shadow-lg">
        <CardContent className="flex flex-col items-start gap-8 md:flex-row">
          {/* LEFT SIDE — TEXT */}
          <div className="flex-1">
            <h1 className="mb-2 text-3xl font-bold">{vegetable.name}</h1>

            {showDetail && (
              <div className="mb-6 space-y-3 text-[#2f2f2f]">
                <p>
                  <strong>Scientific Name:</strong> {vegetable.scientificName}
                </p>
                <p>{vegetable.description}</p>
                <p>
                  <strong>Days to harvest:</strong> {vegetable.daysToHarvestMin}
                  –{vegetable.daysToHarvestMax}
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                className="rounded-full bg-[#e5e4e3] px-6 py-3 text-[#2f2f2f] shadow-md hover:shadow-lg"
                onClick={() => setShowDetail(!showDetail)}
              >
                {showDetail ? 'Hide Details' : 'Show Details'}
              </Button>

              <Button
                onClick={() => navigate(`/plant/${id}/guide`)}
                className="rounded-full bg-[#e5e4e3] px-6 py-3 text-[#2f2f2f] shadow-md hover:shadow-lg"
              >
                Show Full Guide
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <img
            src={vegetable.image}
            alt={vegetable.name}
            className="h-auto w-full rounded-lg object-cover shadow-lg md:w-96 lg:w-[500px]"
          />
        </CardContent>
      </Card>
    </div>
  )
}
