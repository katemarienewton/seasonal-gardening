import express from 'express'
import * as db from '../db/db'

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const updates = req.body

  await db('users').where({ id }).update(updates)

  res.json({ status: 'ok' })
})


// this is if we want to use combination of auth0 and server db - might be too complicated, but will see how much time we have left at the ened..