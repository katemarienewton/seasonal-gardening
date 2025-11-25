import Navbar from './Navbar'
import ThemedH1 from './theme/ThemedHeader'

export default function Header() {
  return (
    <header className="w-full bg-[#f5f1ed]">
      <div className="flex items-center justify-between px-8 py-4">
        <ThemedH1 className="text-[#2f2f2f]">GroWise</ThemedH1>
        <Navbar />
      </div>
    </header>
  )
}
