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
  try {
    const auth0Id = req.auth?.sub
    console.log('HIT GET /users/me')

    if (!auth0Id) return res.status(401).json({ error: 'Unauthorized' })

    let user = await db('users').where({ id: auth0Id }).first()

    if (!user) {
      // Create new user row using Auth0 ID
      await db('users').insert({ id: auth0Id })
      user = await db('users').where({ id: auth0Id }).first()

      return res.json({ ...user, isNew: true })
    }

    return res.json({ ...user, isNew: false })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch user' })
  }
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

// Potential Refactoring for GET /me
// Note: Knex's .insert().returning() behavior varies by database (e.g., SQLite may not support it)
// if (!user) {
//   const [newUser] = await db('users').insert({ id: auth0Id }).returning('*')
//   // If returning('*') is not supported, your original two-step method is safer
//   return res.json({ ...newUser, isNew: true })
// } this is a recommendation to improve the handling by ensuring the req auth is there before the requet is made.
