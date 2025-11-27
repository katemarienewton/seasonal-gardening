import express from 'express'
import * as db from '../db/plantDetail'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const plantDetail = await db.getPlantDetail(id)
    // console.log('Server returning:', plantDetail)
    res.json(plantDetail)
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : 'Error getting plant details',
    )
    res.status(500).send('Could not get plant detail')
  }
})

export default router
