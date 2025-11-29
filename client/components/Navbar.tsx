import { NavLink, useNavigate } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'

const navItemClass =
  'text-base rounded-[40px] px-6 py-3 text-center text-[clamp(14px,3vw,20px)] font-semibold transition-colors duration-300'

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const navigate = useNavigate()

  // My Garden requires login
  const handleMyGarden = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      e.preventDefault()
      loginWithRedirect()
    } else {
      navigate('/my-garden')
    }
  }

  // Auth0 logout
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  return (
    <nav>
      <div className="flex gap-1 rounded-full bg-[#e8e6e1] px-2 py-0.5">
        {/* HOME */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${navItemClass} ${isActive ? 'text-[#6a8a62]' : 'text-[#2f2f2f]'}`
          }
        >
          Home
        </NavLink>

        {/* MY GARDEN (Protected) */}
        <NavLink
          to="/my-garden"
          onClick={handleMyGarden}
          className={({ isActive }) =>
            `${navItemClass} ${isActive ? 'text-[#6a8a62]' : 'text-[#2f2f2f]'}`
          }
        >
          My Garden
        </NavLink>

        {/* LOGIN / LOGOUT */}
        {!isAuthenticated ? (
          <button
            className={`${navItemClass} text-[#2f2f2f]`}
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        ) : (
          <button
            className={`${navItemClass} text-[#2f2f2f]`}
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}
