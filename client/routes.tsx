import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './pages/App.tsx'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="app" element={<App />} />
  </Route>,
)
