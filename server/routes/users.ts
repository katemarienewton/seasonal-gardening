import express from 'express'
import db from '../db/connection.js'
import checkJwt, { JwtRequest } from '../auth0.js'

const router = express.Router()
console.log('users.ts has loaded')

// GET /api/v1/users/me
// - Validates JWT
// - If user exists → return user, isNew: false
// - If not → create user, return isNew: true
router.get('/me', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  if (!auth0Id) return res.status(401).json({ error: 'Unauthorized' })

  // look up user by auth0_id (correct)
  let user = await db('users').where({ auth0_id: auth0Id }).first()

  // create user if not found
  if (!user) {
    user = await db('users')
      .insert({ auth0_id: auth0Id })
      .returning('*')
      .then((rows) => rows[0])

    return res.json({ ...user, isNew: true })
  }

  res.json({ ...user, isNew: false })
})

// PATCH /api/v1/users/me
// Update only backend fields (NOT Auth0)
router.patch('/me', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    if (!auth0Id) return res.status(401).json({ error: 'Unauthorized' })

    const { display_name, region_id } = req.body

    await db('users').where({ id: auth0Id }).update({
      display_name,
      region_id,
    })

    const updated = await db('users').where({ id: auth0Id }).first()
    res.json(updated)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to update user' })
  }
})

export default router
