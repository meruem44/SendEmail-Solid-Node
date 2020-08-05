import dotenv from 'dotenv'

import express, { json } from 'express'
import cors from 'cors'

import { routers } from './routes'

dotenv.config()

class App {
    public server: express.Application

    constructor () {
      this.server = express()

      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.server.use(cors())
      this.server.use(json())
    }

    private routes (): void {
      this.server.use(routers)
    }
}

export default new App().server
