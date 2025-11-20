import { useFruits } from '../hooks/useFruits.ts'
import MonthRegionForm from './MonthRegionForm.tsx'
import { useState } from 'react'

function App() {
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
