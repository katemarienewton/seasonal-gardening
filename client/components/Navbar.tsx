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
    <nav>
      <div className="flex flex-wrap gap-4 rounded-full bg-secondary px-4 py-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-semibold text-foreground ${
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
            `text-sm font-semibold text-foreground ${
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
              `text-sm font-semibold text-foreground ${
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
            className="text-sm font-semibold text-foreground hover:underline"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}
