import express from 'express'
import db from '../db/connection.js'

const router = express.Router()

// GET all plants saved to user's garden
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId

  const rows = await db('user_garden')
    .join('vegetables', 'user_garden.plant_id', 'vegetables.id')
    .where('user_garden.user_id', userId)
    .select(
      'vegetables.id',
      'vegetables.name',
      'vegetables.description',
      'vegetables.image',
    )

  res.json(rows)
})

export default router
