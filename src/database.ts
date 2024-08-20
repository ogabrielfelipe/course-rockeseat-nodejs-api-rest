import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: false,
  migrations: {
    extension: 'ts',
    directory: env.KNEX_MIGRATIONS,
  },
}

export const knex = setupKnex(config)
