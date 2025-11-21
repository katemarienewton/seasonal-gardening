import { NavLink } from 'react-router'

export default function Navbar() {
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
          className={({ isActive }) =>
            `text-sm font-semibold text-[#2f2f2f] ${
              isActive ? 'underline' : ''
            }`
          }
        >
          My Garden
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `text-sm font-semibold text-[#2f2f2f] ${
              isActive ? 'underline' : ''
            }`
          }
        >
          Login
        </NavLink>

        {/* Replace later when Auth is wired */}
        {/* <button onClick={logout}>Logout</button> */}
      </div>
    </nav>
  )
}
