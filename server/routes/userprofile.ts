import express from 'express'
import * as db from '../db/db'

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const updates = req.body

  await db('users').where({ id }).update(updates)

  res.json({ status: 'ok' })
})