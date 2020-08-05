import express, { json } from 'express'
import cors from 'cors'

import { routers } from './routes'

class App {
    public server: express.Application

    constructor () {
      this.server = express()

      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.server.use(json())
      this.server.use(cors())
    }

    private routes (): void {
      this.server.use(routers)
    }
}

export default new App().server
