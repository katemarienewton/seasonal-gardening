import express from 'express'
import * as db from '../db/db'

const router = express.Router()

// GET localhost:3000/api/v1/allplants/
router.get('/', async (req, res) => {
  try {
    const regions = await db.getAllPlants()
    res.json(regions)
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
