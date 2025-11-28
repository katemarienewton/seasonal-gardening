import { useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'

export default function Layout() {
  const [selRegionId, setSelRegionId] = useState('')
  const [selMonth, setSelMonth] = useState('')

  return (
    <div className="relative min-h-screen ">
      {/* header */}
      <Header />

      {/* main content */}
      <main className="relative z-10 px-8 py-8">
        <Outlet
          context={{ selRegionId, setSelRegionId, selMonth, setSelMonth }}
        />
      </main>

      {/* png */}
      <div className="pointer-events-none fixed bottom-0 right-0 z-0 h-64 w-auto">
        <img
          src="/assets/nz-02.png"
          alt="NZ Map"
          className="h-full w-auto object-contain opacity-20"
        />
      </div>
    </div>
  )
}
