import { useState } from 'react'
import { Outlet } from 'react-router'

export default function Layout() {
  // filter states look at docs about context
  const [selRegionId, setSelRegionId] = useState<string>('')
  const [selMonth, setSelMonth] = useState<string>('')

  return (
    <div className="h-screen bg-[#F5F2ED]">
      <header>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
      </header>
      <main>
        <Outlet
          context={{
            selRegionId,
            setSelRegionId,
            selMonth,
            setSelMonth,
          }}
        />
      </main>
      <footer></footer>
    </div>
  )
}
