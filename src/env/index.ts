import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test.local' })
} else {
  config({ path: '.env.local' })
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  KNEX_MIGRATIONS: z.string(),
  PORT: z.number({ coerce: true }).default(3333),
})

export const env = envSchema.parse(process.env)
