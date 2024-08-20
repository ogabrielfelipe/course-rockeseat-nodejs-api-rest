import { env } from './env'
import { app } from './app'

app
  .listen({
    port: env.PORT,
  })
  .then((e) => {
    console.log('🚀 HTTP Server Runnig! \n Host: ' + e)
  })
