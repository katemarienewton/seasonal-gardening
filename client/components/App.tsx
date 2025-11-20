import { useFruits } from '../hooks/useFruits.ts'
import MonthRegionForm from './MonthRegionForm.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Fruits!
        </h1>
      </div>
      <MonthRegionForm />
    </>
  )
}

export default App
