import { useState } from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

export default function Layout() {
  // filter states look at docs about context
  const [selRegionId, setSelRegionId] = useState<string>('')
  const [selMonth, setSelMonth] = useState<string>('')

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f1ed] text-foreground">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-8">
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
