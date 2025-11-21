//import Navbar from './Navbar'
import ThemedH1 from './theme/ThemedHeader'

export default function Header() {
  return (
    <header className="w-full bg-[#F5F2ED] shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* LOGO LEFT */}
        <ThemedH1 className="text-[#2f2f2f]">GroWise</ThemedH1>

        {/* NAVBAR RIGHT */}
      </div>
    </header>
  )
}
