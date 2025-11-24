//import Navbar from './Navbar'
import Navbar from './Navbar'
import ThemedH1 from './theme/ThemedHeader'

export default function Header() {
  return (
    <header className="w-full bg-[#f5f1ed]">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* LOGO LEFT */}
        <ThemedH1 className="text-foreground">GroWise</ThemedH1>

        {/* NAVBAR RIGHT */}
        <Navbar />
      </div>
    </header>
  )
}
