import { createRoutesFromElements, Route } from 'react-router'
import App from './pages/App.tsx'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'
import AllPlantsPage from './components/AllPlantsPage.tsx'
import MyGarden from './pages/MyGarden.tsx'
import PlantPage from './components/PlantPage.tsx'
import PlantGuide from './components/PlantGuide.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="app" element={<App />} />
    <Route path="plant/:id" element={<PlantPage />} />
    <Route path="plant/:id/guide" element={<PlantGuide />} />
    <Route path="plants" element={<AllPlantsPage />} />
    <Route path="my-garden" element={<MyGarden />} />
  </Route>,
)
