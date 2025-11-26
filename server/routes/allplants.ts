import express from 'express'
import * as db from '../db/db'

const router = express.Router()

// GET localhost:3000/api/v1/plants?regionHardinessZone=9b&month=January
router.get('/', async (req, res) => {
  try {
    const { regionHardinessZone, month } = req.query

    const plants = await db.getAllPlants(
      regionHardinessZone as string | undefined,
      month as string | undefined,
    )

    res.json(plants)
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : 'Error getting all plants',
    )
    res
      .status(500)
      .json({ message: 'something went wrong in fetching all plants' })
  }
})

export default router
