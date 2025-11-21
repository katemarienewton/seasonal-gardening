import { Router } from 'express'
import * as db from '../db/region.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const regions = await db.getAllRegions()
    res.json(regions)
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : 'Error getting all regions',
    )
    res
      .status(500)
      .json({ message: 'something sent wrong in fetching all regions' })
  }
})

export default router
