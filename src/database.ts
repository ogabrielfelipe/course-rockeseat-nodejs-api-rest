import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL,
  useNullAsDefault: false,
  migrations: {
    extension: 'ts',
    directory: env.KNEX_MIGRATIONS,
  },
}

export const knex = setupKnex(config)
