import { NavLink, useNavigate } from 'react-router'
// import { useAuth0 } from '@auth0/auth0-react'
import { useTestAuth } from '../hooks/useTestAuth'

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useTestAuth()
  const navigate = useNavigate()

  function handleMyGarden(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (!isAuthenticated) {
      e.preventDefault() // stop NavLink navigation due to condtitional logic for the testauth. could delete later, but wnated to keep navLink structure.
      loginWithRedirect()
    } else {
      navigate('/my-garden')
    }
  }

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <nav className="absolute right-4 top-4">
      <div className="flex gap-4 rounded-full bg-[#e5e4e3] px-6 py-3 shadow-md">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-semibold text-[#2f2f2f] ${
              isActive ? 'underline' : ''
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/my-garden"
          onClick={handleMyGarden}
          className={({ isActive }) =>
            `text-sm font-semibold text-[#2f2f2f] ${
              isActive ? 'underline' : ''
            }`
          }
        >
          My Garden
        </NavLink>
        {/* <NavLink to="/profile">My Profile</NavLink> HAVE IT HERE, BUT ITS NOT ON THE FIGMA BOARD - fi we want it on the navbar we can uncomment it.  */}

        {!isAuthenticated && (
          <NavLink
            to="/login"
            onClick={(e) => {
              e.preventDefault()
              loginWithRedirect()
            }}
            className={({ isActive }) =>
              `text-sm font-semibold text-[#2f2f2f] ${
                isActive ? 'underline' : ''
              }`
            }
          >
            Login
          </NavLink>
        )}

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="text-sm font-semibold text-[#2f2f2f] hover:underline"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}
