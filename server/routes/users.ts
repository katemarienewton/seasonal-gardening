import express from 'express'
import db from '../db/connection.ts' 

const router = express.Router()

// GET user profile
router.get('/:id', async (req, res) => {
  const id = req.params.id
  const user = await db('users').where({ id }).first()

  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }

  res.json(user)
})

// UPDATE user profile
router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const updates = req.body

  await db('users').where({ id }).update(updates)

  const updatedUser = await db('users').where({ id }).first()

  res.json(updatedUser)
})

export default router
