import { createRoutesFromElements, Route } from 'react-router'
import App from './pages/App.tsx'
export default createRoutesFromElements(<Route index element={<App />} />)
