import { NavLink, useNavigate } from 'react-router'
import { useTestAuth } from '../hooks/useTestAuth'

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useTestAuth()
  const navigate = useNavigate()

  function handleMyGarden(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (!isAuthenticated) {
      e.preventDefault()
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
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex gap-4 rounded-full bg-[#e8e6e1] py-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-[40px] px-6 py-3 text-center text-[clamp(14px,3vw,20px)] font-semibold transition-colors duration-300 ${
                isActive ? 'text-[#6a8a62]' : 'text-[#2f2f2f]'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/my-garden"
            onClick={handleMyGarden}
            className={({ isActive }) =>
              `rounded-[40px] px-6 py-3 text-center text-[clamp(14px,3vw,20px)] font-semibold transition-colors duration-300 ${
                isActive ? 'text-[#6a8a62]' : 'text-[#2f2f2f]'
              }`
            }
          >
            My Garden
          </NavLink>

          {!isAuthenticated && (
            <NavLink
              to="/login"
              onClick={(e) => {
                e.preventDefault()
                loginWithRedirect()
              }}
              className={({ isActive }) =>
                `rounded-[40px] px-6 py-3 text-center text-[clamp(14px,3vw,20px)] font-semibold transition-colors duration-300 ${
                  isActive ? 'text-[#6a8a62]' : 'text-[#2f2f2f]'
                }`
              }
            >
              Login
            </NavLink>
          )}

          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="rounded-[40px] px-6 py-3 text-center text-[clamp(14px,3vw,20px)] font-semibold transition-colors duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
