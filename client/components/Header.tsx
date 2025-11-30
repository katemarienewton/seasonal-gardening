import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ThemedH1 from './theme/ThemedHeader'

export default function Header() {
  return (
    <header className="w-full bg-[#f5f1ed]">
      <div className="flex flex-col items-center justify-between px-8 py-4 sm:flex-row">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <ThemedH1 className="cursor-pointer text-[#2f2f2f]">GroWise</ThemedH1>
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
