import { beforeAll, beforeEach, expect, describe, it, afterAll } from 'vitest'

import db from './connection.ts'

beforeAll(async () => {
  console.log('before all')
})
