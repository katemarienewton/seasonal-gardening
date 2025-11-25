import { useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'

export default function Layout() {
  const [selRegionId, setSelRegionId] = useState('')
  const [selMonth, setSelMonth] = useState('')

  return (
    <div className="relative min-h-screen bg-[#f5f1ed]">
      <div className="pointer-events-none absolute inset-0 bg-[url('/assets/nz-02.png')] bg-contain bg-right bg-no-repeat opacity-20"></div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet
            context={{ selRegionId, setSelRegionId, selMonth, setSelMonth }}
          />
        </main>
      </div>
    </div>
  )
}
