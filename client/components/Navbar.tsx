import { NavLink, useNavigate } from 'react-router'
import { useTestAuth } from '../hooks/useTestAuth'

const navItemClass =
  'text-base rounded-[40px] px-6 py-3 text-center text-[clamp(14px,3vw,20px)] font-semibold transition-colors duration-300'

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useTestAuth()
  const navigate = useNavigate()

  const handleMyGarden = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      e.preventDefault()
      loginWithRedirect()
    } else {
      navigate('/my-garden')
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav>
      <div className="flex gap-1 rounded-full bg-[#e8e6e1] px-2 py-0.5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${navItemClass} ${isActive ? 'text-[#6a8a62]' : 'text-[#2f2f2f]'}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/my-garden"
          onClick={handleMyGarden}
          className={({ isActive }) =>
            `${navItemClass} ${isActive ? 'text-[#6a8a62]' : 'text-[#2f2f2f]'}`
          }
        >
          My Garden
        </NavLink>

        {!isAuthenticated ? (
          <NavLink
            to="/login"
            onClick={(e) => {
              e.preventDefault()
              loginWithRedirect()
            }}
            className={({ isActive }) =>
              `${navItemClass} ${isActive ? 'text-[#6a8a62]' : 'text-[#2f2f2f]'}`
            }
          >
            Login
          </NavLink>
        ) : (
          <button onClick={handleLogout} className={navItemClass}>
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}
