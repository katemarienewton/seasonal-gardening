import express from 'express'
import * as db from '../db/plantCalculator'
import { VegetableYield } from '../../models/vegetableYield'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { adults, children } = req.body
    if (typeof adults !== 'number' || typeof children !== 'number') {
      return res
        .status(400)
        .json({ error: 'Adults and children must be a number' })
    }
    const vegetables: VegetableYield[] = await db.getAllVegetablesYield()

    const results = vegetables.map((veg) => {
      const totalConsumption =
        adults * veg.consumptionAdultKg + children * veg.consumptionChildKg
      const averageYield = veg.yieldPerPlantMin + veg.yieldPerPlantMax / 2
      const plantsNeeded = Math.ceil(totalConsumption / averageYield)

      return {
        id: veg.id,
        name: veg.name,
        plantsNeeded,
      }
    })
    res.json(results)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
