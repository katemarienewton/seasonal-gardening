import { useState } from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

export default function Layout() {
  // filter states look at docs about context
  const [selRegionId, setSelRegionId] = useState<string>('')
  const [selMonth, setSelMonth] = useState<string>('')

  return (
    // className="flex min-h-screen flex-col bg-[#f5f1ed] text-foreground">
    <div className="flex min-h-[100dvh] w-full flex-col text-foreground">
      <Header />
      <main className="flex-1 px-8 py-8">
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
