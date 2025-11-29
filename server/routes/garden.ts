import express from 'express'
import db from '../db/connection.js'
import checkJwt, { JwtRequest } from '../auth0.js'

const router = express.Router()

// -----------------------------------------------------
// GET all plants in user's garden
// -----------------------------------------------------
router.get('/', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub

  const user = await db('users').where({ auth0_id: auth0Id }).first()
  if (!user) return res.status(404).json({ error: 'User not found' })

  const garden = await db('user_garden')
    .join('vegetables', 'user_garden.plant_id', 'vegetables.id')
    .select(
      'vegetables.id',
      'vegetables.name',
      'vegetables.description',
      'vegetables.image',
    )
    .where('user_garden.user_id', user.id)

  res.json(garden)
})

// -----------------------------------------------------
// ADD a plant to user's garden
// -----------------------------------------------------
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  const { plant_id } = req.body

  if (!plant_id) return res.status(400).json({ error: 'plant_id is required' })

  const user = await db('users').where({ auth0_id: auth0Id }).first()
  if (!user) return res.status(404).json({ error: 'User not found' })

  await db('user_garden').insert({
    user_id: user.id,
    plant_id: plant_id,
  })

  res.json({ message: 'Plant added to your garden!' })
})

// -----------------------------------------------------
// DELETE a plant from user's garden
// -----------------------------------------------------
router.delete('/:plantId', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  const { plantId } = req.params

  if (!plantId) {
    return res.status(400).json({ error: 'plantId is required' })
  }

  // Get user
  const user = await db('users').where({ auth0_id: auth0Id }).first()
  if (!user) return res.status(404).json({ error: 'User not found' })

  // Delete only this user's plant
  const deleted = await db('user_garden')
    .where({ user_id: user.id, plant_id: plantId })
    .del()

  if (deleted === 0) {
    return res.status(404).json({ error: 'Plant not found in your garden' })
  }

  res.json({ message: 'Plant removed from your garden.' })
})

export default router
