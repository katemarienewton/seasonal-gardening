import express from 'express'
import db from '../db/connection.js'
import checkJwt, { JwtRequest } from '../auth0.js'

const router = express.Router()

// GET /users/me — fetch or create user
router.get('/me', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub

  if (!auth0Id) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // Look up by auth0_id (NOT by id)
  const user = await db('users').where({ auth0_id: auth0Id }).first()

  // If user doesn't exist → create it
  if (!user) {
    const created = await db('users')
      .insert({
        auth0_id: auth0Id,
        display_name: null,
        region_id: null,
      })
      .returning('*')

    return res.json({
      ...created[0],
      isNew: true,
    })
  }

  return res.json({
    ...user,
    isNew: false,
  })
})

// PATCH /users/me — update user profile
router.patch('/me', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  const { display_name, region_id } = req.body

  if (!auth0Id) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  await db('users').where({ auth0_id: auth0Id }).update({
    display_name,
    region_id,
  })

  const updated = await db('users').where({ auth0_id: auth0Id }).first()

  return res.json(updated)
})

export default router
